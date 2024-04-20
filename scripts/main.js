document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dropper').addEventListener('click', clickedDropper);
    document.getElementById('palette').addEventListener('click', clickedPalette);
    document.getElementById('contrast').addEventListener('click', clickedContrast);
    document.getElementById('theme').addEventListener('click', clickedTheme);
});

function resetIcons() {
    document.querySelectorAll('.nav i').forEach(icon => {
        icon.style.color = "#75797e";
        document.querySelector('.pcr-app.visible').style.display = 'flex';
        document.body.style.height = "233px"
        document.querySelector('.parent_1').style.display = 'flex';
        document.querySelector('.parent_2').style.display = 'none'; 
        document.getElementById("row1").style.display = "flex";
        document.getElementById("row2").style.display = "flex";
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

function updateContrast() {
    var foregroundInput = document.getElementById("foreground");
    var backgroundInput = document.getElementById("background");
    var foregroundColor = document.getElementById("foregroundColor");
    var backgroundColor = document.getElementById("backgroundColor");

    foregroundColor.style.backgroundColor = foregroundInput.value;
    backgroundColor.style.backgroundColor = backgroundInput.value;

    document.getElementById("foreground").addEventListener("input", function(){
        checkColors(foregroundInput.value.replace("#", "").toString(), backgroundInput.value.replace("#", "").toString());
    });
    document.getElementById("background").addEventListener("input", function(){
        checkColors(foregroundInput.value.replace("#", "").toString(), backgroundInput.value.replace("#", "").toString());
    });

    document.getElementById("ratio").innerHTML = "Contrast Ratio:" + "<br>" + arrContrast[3];
    document.getElementById("textContrast").innerHTML = "Texts:" + "<br>" + arrContrast[6];
    document.getElementById("componentsContrast").innerHTML = "Components:" + "<br>" + arrContrast[8];
    document.getElementById("headlinesContrast").innerHTML = "Headlines:" + "<br>" + arrContrast[4];
}

function clickedContrast() {
    resetIcons(); 
    document.querySelector('#contrast i').style.color = "#4285f4";
    document.querySelector('.pcr-app.visible').style.display = 'none'; 
    document.querySelector('.parent_2').style.display = 'flex'; 
    document.getElementById("row1").style.display = "none";
    document.getElementById("row2").style.display = "none";

    updateContrast();
    document.getElementById("foreground").addEventListener("input", updateContrast);
    document.getElementById("background").addEventListener("input", updateContrast);
}

async function changeBackgroundColor() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const html = document.querySelector("html");
                const media = document.querySelectorAll("img, picture, video");
                const isFiltered = html.style.filter === "invert(1) hue-rotate(180deg)";

                if (isFiltered) {
                    html.style.filter = "";
                    media.forEach((mediaItem) => {
                        mediaItem.style.filter = "";
                    });
                } else {
                    html.style.filter = "invert(1) hue-rotate(180deg)";
                    media.forEach((mediaItem) => {
                        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
                    });
                }
            }
        });
    });
}

function clickedTheme() {
    resetIcons(); 
    document.querySelector('#theme i').style.color = "#4285f4"; 
    document.querySelector('.pcr-app.visible').style.display = 'none';
    document.querySelector('.parent_1').style.display = 'none'; 
    document.getElementById("row1").style.display = "none";
    document.getElementById("row2").style.display = "none";
    document.body.style.height = "50px";
    changeBackgroundColor();
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
