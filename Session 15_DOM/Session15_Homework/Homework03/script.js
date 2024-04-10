
const hideButton = document.getElementById("hideButton");
    const text = document.getElementById("text");

    hideButton.addEventListener("click", () => {
      text.textContent = "Text after change";
    });
  