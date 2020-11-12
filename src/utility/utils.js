
export const onClickCopyButton = (str, buttonId) => {
    navigator.clipboard.writeText(str);
    document.getElementById(buttonId).innerHTML = "Copied!";
};