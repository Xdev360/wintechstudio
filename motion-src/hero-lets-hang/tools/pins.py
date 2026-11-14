import cv2,numpy as np,json,sys
A=sys.argv[1]
m=cv2.imread(A+'/s-map.png',cv2.IMREAD_UNCHANGED)
# pin defs: cx,cy (circle centre), label box x0,x1,y0,y1, badge right x
P=[('afro',133,315,35,233,390,440),('live',328,315,255,402,390,440),('paint',530,315,463,597,390,440),
('five',133,510,66,203,585,637),('build',523,510,410,638,585,637),('tech',316,705,221,409,780,831),
('girls',537,705,466,608,780,831),('gallery',127,902,68,186,976,1027),('venue',430,902,350,509,976,1027),('ilashe',235,1098,182,287,1172,1224)]
mask=np.zeros(m.shape[:2],np.uint8)
rects=[]
for n,cx,cy,lx0,lx1,ly0,ly1 in P:
    # circle + diamond
    cv2.circle(mask,(cx,cy),64,255,-1)
    cv2.rectangle(mask,(cx-30,cy+30),(cx+30,cy+78),255,-1)
    # badge
    cv2.rectangle(mask,(cx+2,cy-68),(cx+82,cy-22),255,-1)
    # label
    cv2.rectangle(mask,(lx0-8,ly0-6),(lx1+8,ly1+10),255,-1)
    x0=min(lx0,cx-64)-10;x1=max(lx1,cx+84)+10;y0=cy-72;y1=ly1+14
    rects.append(dict(n=n,cx=cx,cy=cy,x0=x0,y0=y0,x1=x1,y1=y1))
# live room glow
cv2.circle(mask,(328,330),95,255,-1)
rgb=m[:,:,:3].copy()
bare=cv2.inpaint(rgb,mask,9,cv2.INPAINT_TELEA)
cv2.imwrite(sys.argv[2]+'/bare-test.png',bare)
cv2.imwrite(sys.argv[2]+'/mask.png',mask)
json.dump(rects,open(sys.argv[2]+'/rects.json','w'))
