const hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const rgb = (r, g, b) => {
    return `rgb(${r}, ${g}, ${b})`;
};

// #1
function convertColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;

        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function() {
        const { r, g, b } = this;

        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}

// #2
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;

//     return `rgb(${r}, ${g}, ${b})`;   
// }

// Color.prototype.hex = function() {
//     const { r, g, b } = this;

//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;

//     return `rgb(${r}, ${g}, ${b}, ${a})`;   
// }

// #3
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    colorName() {
        console.log('Color name = ' + this.name);
    }

    innerRGB() {
        const { r, g, b } = this;
        
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    
    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`;   
    }

    hex() {
        const { r, g, b } = this;
    
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // calcHSL() {
    //     let { r, g, b } = this;

    //     r /= 255;
    //     g /= 255;
    //     b /= 255;

    //     let cmin = Math.min(r, g, b);
    //     let cmax = Math.max(r, g, b);
    //     let delta = cmax - cmin;
    // }
}