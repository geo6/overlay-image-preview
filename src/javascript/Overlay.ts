"use strict";

import { create as createBackground } from "./background";
import createLoading from "./loading";
import createContent from "./content";
import createImage from "./image";
import createCaption from "./caption";
import createTools from "./tools";

class Overlay {
  private element: HTMLElement;
  private captionCallback: (element: HTMLElement) => string;

  constructor(element: HTMLElement, captionCallback?: (element: HTMLElement) => string) {
    this.element = element;
    this.captionCallback = captionCallback;
  }

  public open():void {
    const href = this.element.getAttribute("href");

    document.querySelector("body").style.overflow = "hidden";

    createBackground();
    createLoading();
    createContent();

    const image = new Image();
    image.src = href;
    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      document.querySelector(".overlay-loading").remove();

      createImage(image, width, height);

      if (typeof this.captionCallback !== "undefined") {
        const caption = this.captionCallback(this.element);

        createCaption(caption, true);
      }

      createTools();
    };
  }
}

export { Overlay as default };

// See https://github.com/parcel-bundler/parcel/issues/766
module.exports = Overlay;
