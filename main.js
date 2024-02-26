const copyBTNs = document.querySelectorAll("[data-copyBTN]");

copyBTNs.forEach((copyBTN) => {
  copyBTN.addEventListener("click", () => {
    const inputLink = copyBTN.parentNode.querySelector("[data-link]");
    copyToClipboard(inputLink);
  });
});

function copyToClipboard(element) {
  const textArea = document.createElement("textarea");
  textArea.value = element.value;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
