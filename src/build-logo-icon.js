import fs from 'node:fs/promises';

const scale = 50; // This scale factor was probably not needed, as it is a vector graphic.
// n: This is the important scale factor. Geometrically, it is the main side length of the
// inner irregular hexagon. If you normalize the length of the "chopped off" sides to
// length of 1, then this is the length of the longer sides.
const ratio = 3.33; // 3.33 is the value to make this look just like the original logo
const width = (8 + ratio) * scale;
const height = (width / 2) * Math.sqrt(3);

// Really big string template
const svg = `<svg width="400" height="400"
  viewBox="${1.5 * scale} ${1.5 * Math.sqrt(3) * scale} ${width - 3 * scale} ${height - 1.5 * Math.sqrt(3) * scale}"
  xmlns="http://www.w3.org/2000/svg"
>
  <style>
  @media (prefers-color-scheme: dark) {
    .primary {
      fill: #3070b8;
    }
    .secondary {
      fill: #fafaff;
    }
  }
  </style>
  <defs>
    <path class="primary" id="logo_arc" d="
M 0,${height}
m ${3 * scale},0
l ${scale},0
l ${-1.5 * scale}, ${-1.5 * Math.sqrt(3) * scale}
l ${(ratio * scale) / 2}, ${-(ratio * scale * Math.sqrt(3)) / 2}
l ${-scale},0
l ${-(ratio * scale) / 2}, ${(ratio * scale * Math.sqrt(3)) / 2}
Z"
      fill="#2f6fb6"
    />
  </defs>
  <use href="#logo_arc" />
  <use href="#logo_arc" 
    transform="translate(${(3.5 + ratio) * scale},${-1.5 * scale * Math.sqrt(3)})
    rotate(-120,${3 * scale},${height})"
  />
  <use href="#logo_arc" 
    transform="translate(${((ratio - 1) / 2) * scale},${-height + 1.5 * Math.sqrt(3) * scale})
    rotate(120,${3 * scale},${height})"
  />
  <polygon class="secondary" points="
    ${4 * scale},${height - Math.sqrt(3) * scale}
    ${(4 + ratio) * scale},${height - Math.sqrt(3) * scale}
    ${(4.5 + ratio) * scale},${height - (1.5 * Math.sqrt(3) * scale)}
    ${(4.5 + ratio / 2) * scale},${(2.5 * Math.sqrt(3)) * scale}
    ${(3.5 + ratio / 2) * scale},${(2.5 * Math.sqrt(3)) * scale}
    ${3.5 * scale},${height - (1.5 * Math.sqrt(3) * scale)}
    "
    fill="#000031"
  />
</svg>`;

await fs.writeFile('src/assets/logo-icon.svg', svg);
await fs.writeFile('src/assets/favicon.svg', svg);
