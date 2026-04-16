const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.json'));
const data = {};
for (const f of files) {
  try {
    data[f] = JSON.parse(fs.readFileSync(f, 'utf8'));
  } catch(e) {
    console.error("Error parsing " + f + ":", e);
  }
}
fs.writeFileSync('animations_data.js', 'window.ANIMATION_DATA = ' + JSON.stringify(data) + ';');
console.log('Successfully bundled ' + Object.keys(data).length + ' animations into animations_data.js');
