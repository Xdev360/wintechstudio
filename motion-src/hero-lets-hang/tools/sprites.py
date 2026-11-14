import cv2,numpy as np,json,sys
A,S=sys.argv[1],sys.argv[2]
m=cv2.imread(A+'/s-map.png',cv2.IMREAD_UNCHANGED)
bare=cv2.imread(S+'/bare.png')
pk=cv2.imread(A+'/s-peek.png',cv2.IMREAD_UNCHANGED)
alpha_src=m[:,:,3]
cv2.imwrite(A+'/s-bare.png',np.dstack([bare,alpha_src]))
rects=json.load(open(S+'/rects.json'))
P={'afro':(35,233,390,440),'live':(255,402,390,440),'paint':(463,597,390,440),'five':(66,203,585,637),'build':(410,638,585,637),'tech':(221,409,780,831),'girls':(466,608,780,831),'gallery':(68,186,976,1027),'venue':(350,509,976,1027),'ilashe':(182,287,1172,1224)}
diff=np.abs(m[:,:,:3].astype(int)-bare.astype(int)).max(2)
meta=[]
for r in rects:
    n,cx,cy=r['n'],r['cx'],r['cy'];lx0,lx1,ly0,ly1=P[n]
    pm=np.zeros(diff.shape,np.uint8)
    cv2.circle(pm,(cx,cy),64,255,-1);cv2.rectangle(pm,(cx-30,cy+30),(cx+30,cy+78),255,-1)
    cv2.rectangle(pm,(cx+2,cy-68),(cx+82,cy-22),255,-1);cv2.rectangle(pm,(lx0-8,ly0-6),(lx1+8,ly1+10),255,-1)
    if n=='live': cv2.circle(pm,(328,330),95,255,-1)
    pm=cv2.dilate(pm,np.ones((31,31),np.uint8))
    pm=cv2.GaussianBlur(pm,(9,9),3).astype(float)/255
    a=np.clip(diff/22.0,0,1)*pm
    x0,y0=max(0,r['x0']-20),max(0,r['y0']-20);x1,y1=min(672,r['x1']+20),min(1300,r['y1']+20)
    spr=np.dstack([m[y0:y1,x0:x1,:3],(a[y0:y1,x0:x1]*255).astype(np.uint8)])
    cv2.imwrite(A+f'/pin-{n}.png',spr)
    meta.append(dict(n=n,x=x0,y=y0,w=x1-x0,h=y1-y0,ox=cx,oy=cy+75))
# peek layer: diff peek vs map
d2=np.abs(pk[:,:,:3].astype(int)-m[:,:,:3].astype(int)).max(2)
a2=np.clip(d2/14.0,0,1)
a2=cv2.dilate((a2*255).astype(np.uint8),np.ones((3,3),np.uint8))
ys=np.nonzero(a2.max(1)>0)[0]
print('peek diff rows',ys.min(),ys.max())
# split ring (y<760) and card (y>=760)
ring=a2.copy();ring[760:]=0;card=a2.copy();card[:760]=0
cv2.imwrite(A+'/peek-ring.png',np.dstack([pk[:,:,:3],ring]))
cv2.imwrite(A+'/peek-card.png',np.dstack([pk[:,:,:3],card]))
json.dump(meta,open(A+'/../pins.json','w'),indent=0)
print(meta)
