/**
 * Convertit une couleur d'un format à un autre.
 * 
 * @param {string} color - La couleur à convertir (en hex, rgb ou hsl).
 * @param {string} format - Le format de sortie souhaité (hex, rgb, hsl).
 * @returns {string} La couleur convertie dans le format spécifié.
 * @throws {Error} Si le format de couleur initial est invalide.
 * @throws {Error} Si le format de sortie est invalide.
  */
export const convertColor = (color, format) => {
// analyze color code to check the initial type
    if (color[0] === '#') {
        return hexToRgb(color, format);
    } else if (color[0] === 'r') {
        return rgbToHex(color, format);
    } else {
        return hslToRgb(color, format);
    }
    }



/**
 * Convertit une couleur hexadécimale en RGB ou HSL.
 * 
 * @param {string} hex - La couleur hexadécimale à convertir.
 * @param {string} format - Le format de sortie souhaité (rgb, hsl).
 * @returns {string} La couleur convertie dans le format spécifié.
 */
export const hexToRgb = (hex, format) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    if (format === 'rgb') {
        return `rgb(${r}, ${g}, ${b})`;
    } else if (format === 'hsl') {
        return rgbToHsl(`rgb(${r}, ${g}, ${b})`, format);
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}


/**
 * Convertit une couleur RGB en hexadécimal ou HSL.
 * 
 * @param {string} rgb - La couleur RGB à convertir.
 * @param {string} format - Le format de sortie souhaité (hex, hsl).
 * @returns {string} La couleur convertie dans le format spécifié.
 * @throws {Error} Si le format de sortie est invalide.
 * @throws {Error} Si le format de couleur initial est invalide.
 * @throws {Error} Si les valeurs RGB sont en dehors de la plage 0-255.
 * @throws {Error} Si les valeurs RGB ne sont pas des entiers.
 * 
 */
export const rgbToHex = (rgb, format) => {
    let rgbArr = rgb.match(/\d+/g);
    let r = parseInt(rgbArr[0]);
    let g = parseInt(rgbArr[1]);
    let b = parseInt(rgbArr[2]);
    let hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    if (format === 'hsl') {
        return rgbToHsl(`rgb(${r}, ${g}, ${b})`, format);
    } else {
        return hex;
    }
}


/**
 * Convertit une couleur RGB en HSL ou vice versa.
 *  
 * @param {string} rgb - La couleur RGB à convertir.
 * @param {string} format - Le format de sortie souhaité (rgb, hsl).
 * @returns {string} La couleur convertie dans le format spécifié.
 * @throws {Error} Si le format de sortie est invalide.
 * @throws {Error} Si le format de couleur initial est invalide.
 */
export const rgbToHsl = (rgb, format) => {
    let rgbArr = rgb.match(/\d+/g);
    let r = parseInt(rgbArr[0]) / 255;
    let g = parseInt(rgbArr[1]) / 255;
    let b = parseInt(rgbArr[2]) / 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    if (format === 'rgb') {
        return `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
    } else {
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
}


/**
 * Convertit une couleur HSL en RGB ou vice versa.
 * 
 * @param {string} hsl - La couleur HSL à convertir.
 * @param {string} format - Le format de sortie souhaité (rgb, hex).
 * @returns {string} La couleur convertie dans le format spécifié.
 * @throws {Error} Si le format de sortie est invalide.
 * 
 */
export const hslToRgb = (hsl, format) => {
    let hslArr = hsl.match(/\d+/g);
    let h = parseInt(hslArr[0]) / 360;
    let s = parseInt(hslArr[1]) / 100;
    let l = parseInt(hslArr[2]) / 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        let hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
        return `rgb(${r}, ${g}, ${b})`;
}



/**
 * Convertit des valeurs HSL en une chaîne de couleur HSL.
 * 
 * @param {number} h - La valeur de teinte (0-360).
 * @param {number} s - La valeur de saturation (0-100).
 * @param {number} l - La valeur de luminosité (0-100).
 * @returns {string} La chaîne de couleur HSL.
 * 
 */
const hslToString = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;



/**
 * Génère une palette de couleurs basée sur un type spécifique.
 * @param {string} color - La couleur de base (en hex, rgb ou hsl).
 * @param {string} type - Le type de palette à générer (analogous, complementary, split complementary, triadic, tetradic, square, monochromatic).
 * @param {string} format - Le format des couleurs de sortie (hex, rgb, hsl).
 * @returns {string[]} Un tableau de couleurs dans le format spécifié.
 */
/**
 * Generates a color palette based on the given color, type, and format.
 *
 * @param {string} color - The base color in any valid CSS color format (e.g., hex, rgb, hsl).
 * @param {string} type - The type of color palette to generate. Valid options are:
 *   - 'analogous': Colors adjacent on the color wheel.
 *   - 'complementary': Color opposite on the color wheel.
 *   - 'split complementary': Two colors adjacent to the complementary color.
 *   - 'triadic': Three colors spaced 120 degrees apart.
 *   - 'tetradic': Four colors forming two complementary pairs.
 *   - 'square': Four colors spaced 90 degrees apart.
 *   - 'monochromatic': Variations in saturation and lightness.
 * @param {string} format - The desired output format for the colors (e.g., 'hex', 'rgb', 'hsl').
 * @returns {string[]} An array of colors in the specified format.
 * @throws {Error} If an invalid palette type is provided.
 */
export const generateColorPalette = (color, type, format) => {
    // Convertir la couleur de base en HSL pour faciliter les manipulations
    const baseHsl = convertColor(color, 'hsl');
    const hslValues = baseHsl.match(/\d+/g);
    
    // Extraire les valeurs H, S, L
    let h = parseInt(hslValues[0]);
    let s = parseInt(hslValues[1]);
    let l = parseInt(hslValues[2]);
    
    let palette = [];
    
    switch (type.toLowerCase()) {
        case 'analogous':
            // Palette Analogique : Couleurs adjacentes sur la roue des couleurs
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 30) % 360, s, l));
            palette.push(hslToString((h - 30 + 360) % 360, s, l));
            break;
        
        case 'complementary':
            // Palette Complémentaire : Couleur opposée sur la roue des couleurs
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 180) % 360, s, l));
            break;
        
        case 'split complementary':
            // Palette Split Complémentaire : Deux couleurs adjacentes à la complémentaire
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 150) % 360, s, l));
            palette.push(hslToString((h + 210) % 360, s, l));
            break;
        
        case 'triadic':
            // Palette Triadique : Trois couleurs espacées de 120 degrés
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 120) % 360, s, l));
            palette.push(hslToString((h + 240) % 360, s, l));
            break;
        
        case 'tetradic':
            // Palette Tétradique : Quatre couleurs formant deux paires complémentaires
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 60) % 360, s, l));
            palette.push(hslToString((h + 180) % 360, s, l));
            palette.push(hslToString((h + 240) % 360, s, l));
            break;
        
        case 'square':
            // Palette Carrée : Quatre couleurs espacées de 90 degrés
            palette.push(hslToString(h, s, l));
            palette.push(hslToString((h + 90) % 360, s, l));
            palette.push(hslToString((h + 180) % 360, s, l));
            palette.push(hslToString((h + 270) % 360, s, l));
            break;
        
        case 'monochromatic':
            // Palette Monochromatique : Variations de saturation et de luminosité
            palette.push(hslToString(h, s, l));
            palette.push(hslToString(h, Math.min(s + 10, 100), l));
            palette.push(hslToString(h, Math.max(s - 10, 0), l));
            palette.push(hslToString(h, s, Math.min(l + 10, 100)));
            palette.push(hslToString(h, s, Math.max(l - 10, 0)));
            break;
        
        default:
            throw new Error('Type de palette invalide. Veuillez choisir parmi : analogous, complementary, split complementary, triadic, tetradic, square, monochromatic.');
    }
    
    // Convertir chaque couleur de la palette au format souhaité
    return palette.map(color => convertColor(color, format));
};
