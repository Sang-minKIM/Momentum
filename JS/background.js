const images = [
  "0.jpg",
  "2.jpg",
  "3.jpg",
  "6.jpg",
  "7.jpg",
  "10.jpg",
  "11.jpg",
  "13.jpg",
  "17.jpg",
  "18.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image:url(img/${chosenImage});`;
