const buttonsDisplay = document.querySelector('.buttons-display');
export function renderButtons(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = (i + 1).toString();
    buttonsDisplay.append(button);
  }
}