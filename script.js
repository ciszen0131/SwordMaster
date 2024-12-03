const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const switchButton = document.getElementById('switchButton');

canvas.width = 400;
canvas.height = 300;

const imagelist = ["2.png", "3.png", "4.png", "5.png", "6.jpeg", "8.webp", "12.jpeg", "13.png", "14.jpeg", "16.jpg", "19.png", "20.png", "21.jpeg"];
i = 0;
let image_point = imagelist[i];

const image = new Image;

image.src = "에셋/2.png";
ctx.drawImage(image, 0, 0);
image.addEventListener('load', () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // 그릴 이미지 엘리먼트, x, y, width ,height
});

function strengthen(){
  i = i + 1;
  if (i == imagelist.length){
    i = 0;
  }
  image_point = imagelist[i];
  image.src = "에셋/" + image_point;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}