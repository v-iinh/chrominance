async function changeBackgroundColor() {
    let color = document.getElementById("colorPicker").value;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: (color) => {
            document.body.style.backgroundColor = color;
        },
        args: [color]
    });
}

async function changeTextColor() {
    let color = document.getElementById("colorPicker1").value;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: (color) => {
            document.body.style.color = color;
        },
        args: [color]
    });
}

async function updateTheme() {
    let backgroundColor = document.getElementById("colorPicker").value;
    let textColor = document.getElementById("colorPicker1").value;
    changeBackgroundColor(backgroundColor); 
    changeTextColor(textColor);
}

document.getElementById("backgroundButton").addEventListener("click", updateTheme);
document.getElementById("textButton").addEventListener("click", updateTheme);
