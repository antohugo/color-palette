
# Harmony Color

Harmony Color is an open-source npm package (MIT Licenses) that helps harmonize colors for your API. It takes a base color in hexadecimal format as input, and allows you to choose a color harmonization mode (such as Complementary, Triadic, Tetradic, etc.). The output will be one or more harmonized colors, also in hexadecimal format.

## Features

Input: A base color in hexadecimal format (#RRGGBB).
Modes:

    Complementary: Produces a color directly opposite to the input color.
    Triadic: Generates three colors evenly spaced on the color wheel.
    Tetradic: Creates four colors, forming a rectangle on the color wheel.

Output: One or more harmonized colors, also in hexadecimal format.

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



