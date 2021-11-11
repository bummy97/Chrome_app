const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); //html의 body에 추가해주는 역할 = appendChild()