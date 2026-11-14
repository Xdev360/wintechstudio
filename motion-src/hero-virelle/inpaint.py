# Paints the old delivery chip out of the Figma export. Run inside motion-src/hero-virelle/a: python3 ../inpaint.py
from PIL import Image; import numpy as np, sys
im=np.asarray(Image.open('plate-src.png').convert('RGB')).astype(float)
H,W,_=im.shape
x0,x1,y0,y1=1800,2490,1435,1720
off=-720
out=im.copy()
src=im[:, x0+off:x1+off]
# per-row gain to match brightness at the left seam (gradient differences)
patch=src[y0:y1].copy()
# horizontal colour drift: match column means at left edge (x0) and right edge (x1) via linear ramp of row-wise deltas
dl=im[y0:y1,x0-6:x0].mean(1)-src[y0:y1,0:6].mean(1)
dr=im[y0:y1,x1:x1+6].mean(1)-im[y0:y1, x1+off:x1+off+6].mean(1)
t=np.linspace(0,1,x1-x0)[None,:,None]
patch=patch+dl[:,None,:]*(1-t)+dr[:,None,:]*t
# mask: 1 inside, feather 30px on all sides
yy,xx=np.mgrid[y0:y1,x0:x1]
f=30.0
m=np.minimum.reduce([(xx-x0)/f,(x1-1-xx)/f,(yy-y0)/f,(y1-1-yy)/f]); m=np.clip(m,0,1)[...,None]
out[y0:y1,x0:x1]=patch*m+im[y0:y1,x0:x1]*(1-m)
Image.fromarray(out.clip(0,255).astype(np.uint8)).save('plate.png')
Image.fromarray(out.clip(0,255).astype(np.uint8)).crop((1700,1380,2650,1760)).save('/tmp/claude-0/inp.png')
