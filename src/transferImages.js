import { wait } from "./wait";
import { imageDisplay } from "./addEventListenerToButton";

export function transferImages(imageElement) {
  imageDisplay.classList.add("fade-out");
  wait(2000).then(function () {
    imageDisplay.src = imageElement.src;
    imageDisplay.classList.remove("fade-out");
  });
}
