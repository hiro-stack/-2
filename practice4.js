const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

const images = [
  { filename: "pic1.jpg", alt: "人間の目のクローズアップ" },
  { filename: "pic2.jpg", alt: "波のような岩" },
  { filename: "pic3.jpg", alt: "紫と白のパンジー" },
  { filename: "pic4.jpg", alt: "ファラオの墓にある壁画" },
  { filename: "pic5.jpg", alt: "葉の上の大きな蛾" },
];

for (const image of images) {
  const newImage = document.createElement("img");

  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;
  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "明るく";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.classList.remove("dark");
  } else {
    btn.textContent = "暗く";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.classList.add("dark");
  }
});