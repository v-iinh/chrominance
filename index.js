document.getElementById('enter').addEventListener('click', function() {
    updateRGB();
    updateHex();
    fetchAndDisplayColorScheme();
});

function fetchAndDisplayColorScheme() {
    const hexColor = document.querySelector('.hex').value.replace("#", "");
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=analogic&count=6`)
    .then(response => response.json())
    .then(data => {
        const colors = data.colors.map(color => color.hex.value);
        const analogicDiv = document.getElementById('analogic');
        analogicDiv.textContent = colors.join(', ');
    })
    .catch(error => {
        console.error('Error fetching color scheme:', error);
    });
}
document.getElementById('enter').addEventListener('click', function() {
    fetchAndDisplayColorScheme();
});

function updateHex() {
    var colorPicker = document.getElementById('colorPicker');
    var hexInput = document.querySelector('.hex');
    hexInput.value = colorPicker.value;
}

function updateRGB(){
    var colorPicker = document.getElementById('colorPicker');
    var redInput = document.getElementById('red');
    var greenInput = document.getElementById('green');
    var blueInput = document.getElementById('blue');

    var selectedColor = colorPicker.value;
    var rgb = hexToRgb(selectedColor);

    redInput.value = rgb.r;
    greenInput.value = rgb.g;
    blueInput.value = rgb.b;
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

document.getElementById('dropper').addEventListener('click', () => {
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((result) => {
        var rgb = hexToRgb(result.sRGBHex);
        document.getElementById('red').value = rgb.r;
        document.getElementById('green').value = rgb.g;
        document.getElementById('blue').value = rgb.b;
        document.getElementById('colorPicker').value = result.sRGBHex;
        updateHex(result.sRGBHex);
    });
});
