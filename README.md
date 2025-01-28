
# Harmony Color

Harmony Color is an open-source npm package (MIT Licenses) that helps harmonize colors for your API. It takes a base color in hexadecimal format as input, and allows you to choose a color harmonization mode (such as Complementary, Triadic, Tetradic, etc.). The output will be one or more harmonized colors, also in hexadecimal format.

## Features

- **Input**: A base color in hexadecimal (`#RRGGBB`), RGB (`rgb(r, g, b)`), or HSL (`hsl(h, s%, l%)`) format.
- **Harmonization Modes**:
  - **Complementary**: Produces a color directly opposite to the input color on the color wheel.
  - **Triadic**: Generates three colors evenly spaced around the color wheel.
  - **Tetradic**: Creates four colors forming two complementary pairs.
  - **Analogous**: Produces colors adjacent to the base color on the color wheel.
  - **Split Complementary**: Generates two colors adjacent to the complementary color.
  - **Square**: Produces four colors evenly spaced at 90-degree intervals.
  - **Monochromatic**: Creates variations of the base color by adjusting saturation and lightness.
- **Output**: Harmonized colors in the format of your choice (hexadecimal, RGB, or HSL).

## Installation

Install my-project with npm

```bash
npm install harmony-color
```
## Importation and using
**Index.js :**
```bash
import { generateColorPalette } from "harmony-color"
```
**Feature :**

```bash
// Choose #3498db, generate triadic color in hex format (XXX, XXX, XXX)
const hexColor = "#3498db"; // Bleu
const newColor = generateColorPalette(hexColor, 'triadic', 'hex');
console.log(newColor)
```
**Results :** 
```bash
[ 'rgb(51, 152, 219)', 'rgb(219, 51, 152)', 'rgb(152, 219, 51)' ]
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!


## Authors
- [@antohugo](https://github.com/antohugo)
- [@nathanddrl](https://github.com/nathanddrl)
- [@Henrique-Rds](https://github.com/Henrique-Rds)
- [@yewolf1](https://github.com/yewolf1)
