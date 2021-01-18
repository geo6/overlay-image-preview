"use strict";

let rotate = 0;

export default function(): void {
  const div = document.createElement("div");

  div.className = "overlay-tools";

  const rotateBtn = document.createElement("button");
  rotateBtn.innerHTML = "<i class=\"mi-refresh\">";
  rotateBtn.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    rotate += 90;
    if (rotate >= 360) rotate = 0;

    const image = document.querySelector(".overlay-image") as HTMLDivElement;
    image.style.transform = `rotate(${rotate}deg)`;
  });

  div.append(rotateBtn);

  document.querySelector(".overlay-content").append(div);
}
