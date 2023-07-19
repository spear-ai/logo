import fs from 'node:fs';

const x = 50; // This scale factor was probably not needed, as it is a vector graphic.
// n: This is the important scale factor. Geometrically, it is the main side length of the
// inner irregular hexagon. If you normalize the length of the "chopped off" sides to
// length of 1, then this is the length of the longer sides.
const n = 3.33; // 3.33 is the magic value to make this look just like the original logo
const w = (8 + n) * x;
const h = (w / 2) * Math.sqrt(3);

// Really big string template
const svg = `<svg
  viewBox="${1.5 * x} ${1.5 * Math.sqrt(3) * x} ${w - 3 * x} ${h - 1.5 * Math.sqrt(3) * x}"
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
M 0,${h}
m ${3 * x},0
l ${x},0
l ${-1.5 * x}, ${-1.5 * Math.sqrt(3) * x}
l ${(n * x) / 2}, ${-(n * x * Math.sqrt(3)) / 2}
l ${-x},0
l ${-(n * x) / 2}, ${(n * x * Math.sqrt(3)) / 2}
Z"
      fill="#2f6fb6"
    />
  </defs>
  <use href="#logo_arc" xlink:href="#logo_arc"/>
  <use href="#logo_arc" xlink:href="#logo_arc"
    transform="translate(${(3.5 + n) * x},${-1.5 * x * Math.sqrt(3)})
    rotate(-120,${3 * x},${h})"
  />
  <use href="#logo_arc" xlink:href="#logo_arc"
    transform="translate(${((n - 1) / 2) * x},${-h + 1.5 * Math.sqrt(3) * x})
    rotate(120,${3 * x},${h})"
  />
  <polygon class="secondary" points="
    ${4 * x},${h - Math.sqrt(3) * x}
    ${(4 + n) * x},${h - Math.sqrt(3) * x}
    ${(4.5 + n) * x},${h - (1.5 * Math.sqrt(3) * x)}
    ${(4.5 + n / 2) * x},${(2.5 * Math.sqrt(3)) * x}
    ${(3.5 + n / 2) * x},${(2.5 * Math.sqrt(3)) * x}
    ${3.5 * x},${h - (1.5 * Math.sqrt(3) * x)}
    "
    fill="#000031"
  />
</svg>`;

// Write the svg to file
fs.writeFile('src/assets/better-logo.svg', svg, () => {});
