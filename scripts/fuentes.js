// Descarga las tipografías de la página para que la app se vea igual sin internet.
// Si algo falla, la app usa las letras del sistema y todo sigue funcionando.
const fs = require('fs');
const path = require('path');
const CSS_URL = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=Big+Shoulders+Display:wght@700;900&family=Martian+Mono:wght@400;600&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const OUT = path.join(__dirname, '..', 'www', 'fonts');

(async () => {
  const css = await (await fetch(CSS_URL, { headers: { 'User-Agent': UA } })).text();
  // Solo los bloques latin y latin-ext (español completo); el resto no hace falta.
  const blocks = css.split('/* ').slice(1).map(b => '/* ' + b).filter(b => /^\/\* (latin|latin-ext) \*\//.test(b));
  if (!blocks.length) throw new Error('Google Fonts no regresó bloques latinos');
  fs.mkdirSync(OUT, { recursive: true });
  let n = 0, outCss = '';
  for (const b of blocks) {
    let block = b;
    for (const m of b.matchAll(/url\((https:[^)]+\.woff2)\)/g)) {
      const name = 'f' + (n++) + '.woff2';
      const buf = Buffer.from(await (await fetch(m[1])).arrayBuffer());
      fs.writeFileSync(path.join(OUT, name), buf);
      block = block.replace(m[1], name);
    }
    outCss += block + '\n';
  }
  fs.writeFileSync(path.join(OUT, 'fonts.css'), outCss);
  console.log('Fuentes listas:', n, 'archivos');
})().catch(e => { console.error('Sin fuentes locales:', e.message); process.exit(1); });
