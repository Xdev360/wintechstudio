# Rebuilds the site poster with the corrected delivery chip, then the film-size crop.
# Run from the repo root after inpaint.py (makes a/plate.png) and chip.cjs (makes a/chip.png):
#   GAP=21 NODE_PATH=$(npm root -g) node motion-src/hero-virelle/chip.cjs "Delivered in 5 to 7 working days" 38.2 500 motion-src/hero-virelle/a/chip.png
#   python3 motion-src/hero-virelle/build-poster.py <old film-virelle.webp>
from PIL import Image; import numpy as np, sys
d='motion-src/hero-virelle/a/'
old=np.asarray(Image.open(sys.argv[1]).convert('RGB')).astype(float)
plate=np.asarray(Image.open(d+'plate.png').convert('RGB')).astype(float)
x0,x1,y0,y1=1690,2505,1425,1725; f=24.
yy,xx=np.mgrid[0:old.shape[0],0:old.shape[1]]
m=np.minimum.reduce([(xx-x0)/f,(x1-xx)/f,(yy-y0)/f,(y1-yy)/f]).clip(0,1)[...,None]
im=Image.fromarray((plate*m+old*(1-m)).clip(0,255).astype(np.uint8)).convert('RGBA')
im.alpha_composite(Image.open(d+'chip.png'),(1683,1425))   # chip right edge stays at x 2438, like the original
im=im.convert('RGB'); im.save(d+'poster-full.png')
im.save('public/images/cases/film-virelle.webp',quality=86,method=6)
im.resize((1292,888),Image.LANCZOS).save('public/images/cases/film-virelle-800.webp',quality=86,method=6)
im.crop((0,170,2720,1700)).resize((1280,720),Image.LANCZOS).save(d+'poster.png')   # hero cover crop
