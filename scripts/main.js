document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', clickedSearch);
    document.getElementById('dropper').addEventListener('click', clickedDropper);
    document.getElementById('palette').addEventListener('click', clickedPalette);
    document.getElementById('contrast').addEventListener('click', clickedContrast);
});

function resetIcons() {
    document.querySelectorAll('.nav i').forEach(icon => {
        icon.style.color = "#75797e";
    });
}

function clickedSearch() {
    resetIcons();
    document.querySelector('#search i').style.color = "#4285f4";
}

function clickedDropper() {
    resetIcons();
    document.querySelector('#dropper i').style.color = "#4285f4"; 

    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((result) => {
        pickr.setColor(result.sRGBHex, true);
    });
}

function clickedPalette() {
    resetIcons(); 
    document.querySelector('#palette i').style.color = "#4285f4";
    let value = pickr.getColor().toHEX().toString().replace("#", "");
    analogic(value);
}

function analogic(hexColor) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=analogic&count=6`)
    .then(response => response.json())
    .then(data => {
        const colors = data.colors.map(color => color.hex.value);
        console.log(colors.join(', '));
    })
    .catch(error => {
        console.error('SERVER ERROR', error);
    });
}

function clickedContrast() {
    resetIcons(); 
    document.querySelector('#contrast i').style.color = "#4285f4"; 
}

const hexToRgb = function(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
}

const colorName = function(hex) {
    const rgb = hexToRgb(hex);
    let distance = 0;
    let minDistance = Infinity;
    let c;
    
    colors.forEach(color => {
        distance = Math.sqrt(
            (color.rgb.r - rgb.r) ** 2 +
            (color.rgb.g - rgb.g) ** 2 +
            (color.rgb.b - rgb.b) ** 2
        );

        if (distance < minDistance) {
            minDistance = distance;
            c = color;
        }
    });
    return c.name;
};

const pickr = Pickr.create({
    el: '.color-picker',
    showAlways: true,
    default: '#ffffff',
    comparison: false,
    components: {
        hue: true,
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
        }
    }
});
