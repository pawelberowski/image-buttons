import {
  getImageElementWhenLoaded,
  loadingDisplay,
} from "./getImageElementWhenLoaded";
export const imageDisplay = document.querySelector(".image-display");
export function addEventListenerToButton(button, imageSource) {
  button.addEventListener("click", function () {
    getImageElementWhenLoaded(imageSource).then(function (imageElement) {
      loadingDisplay.classList.add("hidden");
      imageDisplay.src = imageElement.src;
    });
  });
}
