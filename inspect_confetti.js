const fs = require('fs');
const data = JSON.parse(fs.readFileSync('Confetti 01.json', 'utf8'));
const w = data.w;
const h = data.h;
console.log(`Comp size: ${w}x${h}`);
data.layers.forEach((l, i) => {
  let shapeDesc = '';
  if (l.shapes) {
    l.shapes.forEach(s => {
      if (s.ty === 'gr') {
         s.it.forEach(it => {
            if (it.ty === 'sh') {
               // Path
               shapeDesc += 'path ';
            }
            if (it.ty === 'fl' || it.ty === 'st') {
               shapeDesc += (it.ty === 'fl' ? 'fill' : 'stroke') + ' ';
            }
         });
      } else if (s.ty === 'rc') {
         shapeDesc += `rect(${s.s?.k}) `;
      }
    });
  }
  // Check position and scale
  const pos = l.ks?.p?.k || l.ks?.p;
  // If it's static position
  const pStr = Array.isArray(pos) ? `[${pos[0]}, ${pos[1]}]` : (typeof pos === 'object' ? 'anim' : pos);
  console.log(`[${i}] nm: ${l.nm}, ty: ${l.ty}, p: ${pStr}, shapes: ${shapeDesc}`);
});
