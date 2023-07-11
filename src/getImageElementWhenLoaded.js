const loadingDisplay = document.querySelector(".loading-display");
export function getImageElementWhenLoaded(imageSource) {
  return new Promise(function (resolve) {
    const imageElement = document.createElement("img");
    imageElement.src = imageSource;
    loadingDisplay.classList.remove("hidden");
    imageElement.addEventListener("load", function () {
      return resolve(imageElement);
    });
  });
}
