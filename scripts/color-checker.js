let arrContrast = ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN"];
var foregroundHex;
var backgroundHex;
var colorData;

var field = 'f';
var url = window.location.href;
if (url.indexOf('?' + field + '=') != -1) {
    foregroundHex = getUrlVariable('f');
    backgroundHex = getUrlVariable('b');
    checkColors(foregroundHex, backgroundHex);

} else if (url.indexOf('&' + field + '=') != -1) {
    foregroundHex = getUrlVariable('f');
    backgroundHex = getUrlVariable('b');
    checkColors(foregroundHex, backgroundHex);
}

function getUrlVariable(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, 
        function(m, key, value) { 
            vars[key] = value !== undefined ? value : '';
        }
    );
    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
};

function checkColors(foregroundColor, backgroundColor) {
    if (foregroundColor && backgroundColor) {
        foregroundHex = foregroundColor;
        backgroundHex = backgroundColor;
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

    var foregroundR = hexToRgb(foregroundHex).r
    var foregroundG = hexToRgb(foregroundHex).g
    var foregroundB = hexToRgb(foregroundHex).b
    var foregroundColorRgba = ["" + foregroundR + "", "" + foregroundG + "", "" + foregroundB + "", "0"]

    var backgroundR = hexToRgb(backgroundHex).r
    var backgroundG = hexToRgb(backgroundHex).g
    var backgroundB = hexToRgb(backgroundHex).b
    var backgroundColorRgba = ["" + backgroundR + "", "" + backgroundG + "", "" + backgroundB + "", "1"]

    function luma(rgbaColor) {
        for (var i = 0; i < 3; i++) {
            var rgb = rgbaColor[i];
            rgb /= 255;
            rgb = rgb < .03928 ? rgb / 12.92 : Math.pow((rgb + .055) / 1.055, 2.4);
            rgbaColor[i] = rgb;
        }
        return .2126 * rgbaColor[0] + .7152 * rgbaColor[1] + 0.0722 * rgbaColor[2];
    }

    var foregroundLuma = luma(foregroundColorRgba);
    var backgroundLuma = luma(backgroundColorRgba);

    function checkContrast() {
        foregroundLuma = foregroundLuma + 0.05
        backgroundLuma = backgroundLuma + 0.05

        if (backgroundLuma < foregroundLuma) {
            return foregroundLuma / backgroundLuma;
        } else {
            return backgroundLuma / foregroundLuma;
        }
    }

    var ratio = checkContrast();
    var ratioRounded = ratio.toPrecision(3);

    function checkRating(value) {
        if (ratioRounded > value) {
            return "Pass";
        } else {
            return "Fail";
        }
    }

    var aaHeadline = checkRating(3);
    var aaaHeadline = checkRating(4.5);
    var aaText = checkRating(4.5);
    var aaaText = checkRating(7);
    var aaComponent = checkRating(3);

    arrContrast[0] = foregroundHex
    arrContrast[1] = backgroundHex
    arrContrast[2] = ratio
    arrContrast[3] = ratioRounded
    arrContrast[4] = aaHeadline
    arrContrast[5] = aaaHeadline
    arrContrast[6] = aaText
    arrContrast[7] = aaaText
    arrContrast[8] = aaComponent
    arrContrast[9] = foregroundLuma
    arrContrast[10] = backgroundLuma

    colorData = {
        "foregroundHex": foregroundHex,
        "backgroundHex": backgroundHex,
        "foregroundRgb": foregroundR + ", " + foregroundG + ", " + foregroundB,
        "backgroundRgb": backgroundR + ", " + backgroundG + ", " + backgroundB,
        "contrast": ratioRounded,
        "aaHeadline": aaHeadline,
        "aaaHeadline": aaaHeadline,
        "aaText": aaText,
        "aaaText": aaaText,
        "aaComponent": aaComponent,
        "foregroundLuma": foregroundLuma,
        "backgroundLuma": backgroundLuma
    }
};

for(let i=0; i<arrContrast.length; i++){
    if(arrContrast[i] === true){
        arrContrast[i] = "Pass"
    }
    if(arrContrast[i] === false){
        arrContrast[i] = "Fail"
    }
}