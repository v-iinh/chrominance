document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dropper').addEventListener('click', clickedDropper);
    document.getElementById('palette').addEventListener('click', clickedPalette);
    document.getElementById('contrast').addEventListener('click', clickedContrast);
    document.getElementById('theme').addEventListener('click', clickedTheme);
    document.getElementById('gradient').addEventListener('click', clickedGradient);
});

function resetIcons() {
    document.querySelectorAll('.nav i').forEach(icon => {
        icon.style.color = "#75797e";
        document.querySelector('.pcr-app.visible').style.display = 'flex';
    });
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
    document.querySelector('.pcr-app.visible').style.display = 'none';
    if (!clickedPalette.modes || clickedPalette.modes.length === 0) {
        clickedPalette.modes = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"];
        shuffleModes();
    }

    const selectedMode = clickedPalette.modes.shift();
    if (clickedPalette.modes.length === 0) {
        shuffleModes();
    }
    palette(value, selectedMode);
}

function shuffleModes() {
    for (let i = clickedPalette.modes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clickedPalette.modes[i], clickedPalette.modes[j]] = [clickedPalette.modes[j], clickedPalette.modes[i]];
    }
}

function palette(hexColor, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=6`)
    .then(response => response.json())
    .then(data => {
        const colors = data.colors.map(color => color.hex.value);
        document.getElementById("one").style.backgroundColor = colors[0]
        document.getElementById("one").innerHTML = colors[0]

        document.getElementById("two").style.backgroundColor = colors[1]
        document.getElementById("two").innerHTML = colors[1]

        document.getElementById("three").style.backgroundColor = colors[2]
        document.getElementById("three").innerHTML = colors[2]

        document.getElementById("four").style.backgroundColor = colors[3]
        document.getElementById("four").innerHTML = colors[3]

        document.getElementById("five").style.backgroundColor = colors[4]
        document.getElementById("five").innerHTML = colors[4]

        document.getElementById("six").style.backgroundColor = colors[5]
        document.getElementById("six").innerHTML = colors[5]
    })
    .catch(error => {
        console.error('SERVER ERROR', error);
    });
}

function clickedContrast() {
    resetIcons(); 
    document.querySelector('#contrast i').style.color = "#4285f4"; 
}

function clickedTheme() {
    resetIcons(); 
    document.querySelector('#theme i').style.color = "#4285f4"; 
}

function clickedGradient() {
    resetIcons();
    document.querySelector('#gradient i').style.color = "#4285f4";
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
