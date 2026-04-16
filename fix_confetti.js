const fs = require('fs');
const data = JSON.parse(fs.readFileSync('Confetti 01.json', 'utf8'));

let count = 0;
data.layers = data.layers.filter(layer => {
    if (layer.shapes && layer.shapes[0] && layer.shapes[0].nm === 'Confetti') {
        const sh = layer.shapes[0].it.find(i => i.ty === 'sh');
        if (sh && sh.ks && sh.ks.k && sh.ks.k.v) {
            const v = sh.ks.k.v;
            // Check if the shape is the huge -139.5, -82 rectangle
            if (v[0] && v[0][0] === -139.5 && v[0][1] === -82) {
                count++;
                return false;
            }
        }
    }
    return true;
});

console.log(`Removed ${count} full-comp background layers.`);
fs.writeFileSync('Confetti 01.json', JSON.stringify(data));
