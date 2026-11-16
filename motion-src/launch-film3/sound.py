# Launch film 3 soundtrack, built to the spec's "Apple tactile" mix.
# Felt-piano pulse at 100 BPM (bed -20 dB), ducked 4 dB under text and interactions,
# LPF 400 Hz air swells on cuts (-24), soft glass taps on clicks (-26, +-3% pitch),
# LPF 800 Hz membrane thuds for typing (-30), C5 -> G5 glass chime on the 100 lock-in (-20).
import numpy as np, scipy.signal as sg, scipy.io.wavfile as wf, sys
SR=48000; DUR=45.6; N=int(SR*DUR); rng=np.random.default_rng(7)
db=lambda d:10**(d/20)
def lp(x,f,o=2): b,a=sg.butter(o,f/(SR/2)); return sg.lfilter(b,a,x)
def hp(x,f,o=2): b,a=sg.butter(o,f/(SR/2),'high'); return sg.lfilter(b,a,x)
def add(buf,x,t):
    i=int(t*SR); j=min(N,i+len(x));
    if i<N: buf[i:j]+=x[:j-i]
def mtof(m): return 440*2**((m-69)/12)
def felt(m,dur=1.6,vel=1.0):
    n=int(SR*dur); t=np.arange(n)/SR; f=mtof(m)
    env=(1-np.exp(-t/0.012))*np.exp(-t/0.55)
    x=np.sin(2*np.pi*f*t)+0.35*np.sin(2*np.pi*2*f*t)*np.exp(-t/0.25)+0.12*np.sin(2*np.pi*3*f*t)*np.exp(-t/0.12)
    x+= 0.04*np.sin(2*np.pi*f*1.003*t)
    return lp(x*env*vel,2600)
def rms_norm(x,target_db):
    r=np.sqrt(np.mean(x[np.abs(x)>1e-6]**2)) if np.any(x) else 1
    return x*db(target_db)/r
BPM=100; beat=60/BPM
# progression, 2 bars each: Fmaj9, Am7, Dm9, Bbmaj9, repeat; end resolves on Fmaj9 at 39.6
CH=[[41,53,57,60,64,67],[45,52,55,60,64,67],[38,50,53,57,60,64],[46,50,53,57,60,65]]
music=np.zeros(N)
t=0.0; k=0
while t<39.6-1e-6:
    ch=CH[(k//8)%4]
    if k%8==0: add(music,felt(ch[0]-12,4.5,0.7)+felt(ch[0],4.5,0.5),t)  # bass on the bar pair
    # soft pulse: alternating upper chord tones, quarter notes, gentle velocity shape
    note=ch[2+(k%4)] if 2+(k%4)<len(ch) else ch[-1]
    v=0.55 if k%2==0 else 0.38
    add(music,felt(note,1.4,v),t)
    if k%4==2: add(music,felt(ch[1]+12,1.8,0.22),t+beat/2)
    t+=beat; k+=1
# end: resolve and ring
for m,v in [(29,0.7),(41,0.6),(57,0.4),(60,0.35),(64,0.35),(67,0.3),(72,0.25)]: add(music,felt(m,6.0,v),39.6)
for i,m in enumerate([76,79,84]): add(music,felt(m,3.0,0.18),41.8+i*0.2)
# warm pad bed under everything
tt=np.arange(N)/SR; pad=np.zeros(N)
for seg in range(10):
    a=seg*4.8; ch=CH[seg%4] if a<39.6 else [41,53,57,60,64]
    if a>=39.6: ch=[41,53,57,60,64]
    w=np.clip((tt-a)/0.6,0,1)*np.clip((a+5.4-tt)/0.6,0,1)
    for m in ch[1:4]: pad+=w*np.sin(2*np.pi*mtof(m)*tt)*0.12
pad=lp(pad,900)
end=np.clip((tt-39.6)/0.01,0,1); pad[tt>=39.6]=0
padE=np.zeros(N)
for m in [53,57,60,64]: padE+=np.sin(2*np.pi*mtof(m)*tt)*0.1
padE*=np.clip((tt-39.6)/0.8,0,1)*np.clip((45.6-tt)/3.0,0,1)
music=music+pad+lp(padE,900)
music=rms_norm(music,-20)
# ducking envelope (-4 dB) for text holds and interactions, 150 ms ramps
duck_ranges=[(0.9,2.2),(2.5,4.5),(8.4,9.2),(9.95,13.6),(15.0,16.6),(18.2,18.9),(21.4,25.3),(26.4,28.4),(29.7,30.4),(32.7,34.4),(34.75,39.6),(41.8,45.6)]
g=np.ones(N)
for a,b in duck_ranges:
    w=np.clip((tt-a)/0.15,0,1)*np.clip((b-tt)/0.15,0,1)
    g=np.minimum(g,1-(1-db(-4))*w)
music*=g
# fade the music in under the first frame, out at the end
music*=np.clip(tt/0.4,0,1)*np.clip((45.6-tt)/2.5,0,1)
# air swells: band of noise LPF 400 Hz, 0.7 s rise into the cut, 400 ms tail
fx=np.zeros(N)
def swell(at):
    pre=0.7; tail=0.4; n=int(SR*(pre+tail)); t=np.arange(n)/SR
    env=np.where(t<pre,(t/pre)**2,np.exp(-(t-pre)/0.16))
    x=lp(lp(rng.standard_normal(n),400,2),400,2)*env
    return x
sw=np.zeros(N)
for c in [2.2,20.8,34.6]: add(sw,swell(c),c-0.7)
sw=rms_norm(sw,-24)
# sub-bass swells on other cuts (sine 48 -> 62 Hz), some cuts carried by the music alone
def sub(at):
    pre=0.6; tail=0.5; n=int(SR*(pre+tail)); t=np.arange(n)/SR
    env=np.where(t<pre,(t/pre)**2,np.exp(-(t-pre)/0.2)); f=48+14*np.clip(t/pre,0,1)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*env
sb=np.zeros(N)
for c in [4.5,13.8,25.6,39.6]: add(sb,sub(c),c-0.6)
sw=sw+rms_norm(sb,-24)
# soft glass taps (<35 ms), pitch varied +-3%
taps=np.zeros(N)
def tap(f):
    n=int(SR*0.034); t=np.arange(n)/SR
    x=(np.sin(2*np.pi*f*t)+0.4*np.sin(2*np.pi*f*2.76*t))*np.exp(-t/0.007)*(1-np.exp(-t/0.0006))
    return lp(x,3500)
for i,c in enumerate([8.6,18.45,27.9,29.9,32.9,33.45,34.0]): add(taps,tap(1250*(1+0.03*((-1)**i)*(i%3)/2)),c)
taps=rms_norm(taps,-26)*0.35
# membrane key thuds, LPF 800 Hz
keys=np.zeros(N)
def key():
    n=int(SR*0.05); t=np.arange(n)/SR
    x=(rng.standard_normal(n)*0.5+np.sin(2*np.pi*170*t))*np.exp(-t/0.012)
    return lp(x,800,3)
for a,b,cnt in [(26.6,27.7,23),(35.3,36.5,42)]:
    for i in range(cnt):
        if i%7==6: continue
        add(keys,key()*(0.7+0.3*rng.random()),a+(b-a)*i/cnt+rng.normal(0,0.006))
keys=rms_norm(keys,-30)*0.4
# C5 -> G5 glass chime on the 100 lock-ins
def bell(f,d=2.2):
    n=int(SR*d); t=np.arange(n)/SR
    x=np.sin(2*np.pi*f*t)*np.exp(-t/0.9)+0.25*np.sin(2*np.pi*f*2.0*t)*np.exp(-t/0.5)+0.08*np.sin(2*np.pi*f*3.01*t)*np.exp(-t/0.25)
    return x*(1-np.exp(-t/0.003))
ch=np.zeros(N); add(ch,bell(mtof(72)),15.9); add(ch,bell(mtof(79))*0.9,16.15)
ch=rms_norm(ch,-20)*0.7
# 150 ms room tail on taps and keys so the last one never cuts off dry
irn=int(SR*0.3); it2=np.arange(irn)/SR; ir2=lp(rng.standard_normal(irn)*np.exp(-it2/0.05),2500); ir2/=np.sqrt(np.sum(ir2**2))
tk=taps+keys; tk=tk+0.35*sg.fftconvolve(tk,ir2)[:N]
mix=music+sw+tk+ch
# gentle room: short diffuse reverb
ir_n=int(SR*1.2); it=np.arange(ir_n)/SR; ir=rng.standard_normal(ir_n)*np.exp(-it/0.35); ir=lp(ir,3000); ir/=np.sqrt(np.sum(ir**2))
wet=sg.fftconvolve(mix,ir)[:N]
L=mix+0.18*wet; R=mix+0.18*np.roll(wet,int(SR*0.011))
st=np.stack([L,R],1); st/=np.max(np.abs(st))/db(-3)
wf.write(sys.argv[1],SR,(st*32767).astype(np.int16))
print('ok')
