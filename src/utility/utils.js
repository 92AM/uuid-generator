export const onClickCopyButton = (str, buttonId) => {
    navigator.clipboard.writeText(str).then(() => {});
    document.getElementById(buttonId).innerHTML = "Copied!";
};