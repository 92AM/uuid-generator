export const onClickCopyButton = (str, buttonId) => {
    window.navigator.clipboard
        .writeText(str)
        .then(() => window.document.getElementById(buttonId).innerHTML = "Copied!");
};

export const resetCopyButton = (buttonId) => {
    window.document.getElementById(buttonId).innerHTML = "Copy";
};