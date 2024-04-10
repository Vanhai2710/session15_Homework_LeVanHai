
const hideTextButton = document.getElementById("hideTextButton");
const optionalText = document.getElementById("optionalText");

hideTextButton.addEventListener("click", () => {
  optionalText.classList.toggle("active");
});
