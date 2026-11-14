import cv2,numpy as np,sys
A,S=sys.argv[1],sys.argv[2]
m=cv2.imread(A+'/s-map.png',cv2.IMREAD_UNCHANGED)
rgb=m[:,:,:3].astype(np.float32)
mask=cv2.imread(S+'/mask.png',0)>0
mask=cv2.dilate(mask.astype(np.uint8),np.ones((31,31),np.uint8))>0
mask[:178,:]=False; mask[1300:,:]=False
mask[:, :]=mask
H,W=mask.shape
C={'bg':(255,243,245),'blk':(248,230,234),'st':(255,255,255),'lag':(245,230,221)} # BGR
def cls(p):
    b,g,r=p
    best=None;bd=1e9
    for k,v in C.items():
        d=abs(b-v[0])+abs(g-v[1])+abs(r-v[2])
        if d<bd: bd=d;best=k
    return best,bd
# class map for unmasked pixels
K=np.empty((H,W),dtype=object)
for y in range(178,1300):
    for x in range(W):
        if not mask[y,x]:
            k,d=cls(rgb[y,x]); K[y,x]=k if d<12 else None
# coast: for each x first y>=880 that is lagoon
coast=np.full(W,-1.0)
for x in range(W):
    for y in range(880,1150):
        if not mask[y,x] and K[y,x]=='lag': coast[x]=y;break
    # if masked at that region coast unknown
    col=[y for y in range(880,1150) if mask[y,x]]
    if col and coast[x]>0 and min(col)<coast[x]: coast[x]=-1
xs=np.arange(W);ok=coast>0
coast=np.interp(xs,xs[ok],coast[ok])
# street columns/rows: white fraction of unmasked
def streets(axis):
    res=[]
    if axis=='v':
        for x in range(W):
            ys=[y for y in range(180,940) if not mask[y,x]]
            wy=[y for y in ys if K[y,x]=='st']
            res.append((len(wy)/max(1,len(ys)), min(wy) if wy else 0, max(wy) if wy else 0))
    else:
        for y in range(180,1000):
            xx=[x for x in range(W) if not mask[y,x]]
            wx=[x for x in xx if K[y,x]=='st']
            res.append((len(wx)/max(1,len(xx)), min(wx) if wx else 0, max(wx) if wx else 0))
    return res
V=streets('v');Hs=streets('h')
out=rgb.copy()
ys,xs2=np.nonzero(mask)
def ray(y,x,dy,dx):
    yy,xx=y+dy,x+dx
    while 0<=yy<H and 0<=xx<W and mask[yy,xx]: yy+=dy;xx+=dx
    if 178<=yy<1300 and 0<=xx<W: return K[yy,xx]
    return None
for y,x in zip(ys,xs2):
    if y>=coast[x]: k='lag'
    else:
        fv,y0,y1=V[x]; k=None
        if fv>0.85 and y0-4<=y<=y1+4: k='st'
        if k is None and 180<=y<1000:
            fh,x0,x1=Hs[y-180]
            if fh>0.85 and x0-4<=x<=x1+4: k='st'
        if k is None:
            rs=[ray(y,x,-1,0),ray(y,x,1,0),ray(y,x,0,-1),ray(y,x,0,1)]
            if rs[0]==rs[1] and rs[0] in ('blk','bg'): k=rs[0]
            elif rs[2]==rs[3] and rs[2] in ('blk','bg'): k=rs[2]
            else:
                nb=[r for r in rs if r in ('blk','bg')]
                k=max(set(nb),key=nb.count) if nb else 'blk'
    out[y,x]=C[k]
bl=cv2.GaussianBlur(out,(3,3),0.8)
mm=cv2.dilate(mask.astype(np.uint8),np.ones((3,3),np.uint8))>0
out[mm]=bl[mm]
cv2.imwrite(S+'/bare.png',out.astype(np.uint8))
