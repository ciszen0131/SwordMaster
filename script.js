const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

// 이미지 리스트와 초기 설정
const imagelist = [
  "2.png", "3.png", "4.png", "5.png", "6.jpeg",
  "8.webp", "12.jpeg", "13.png", "14.jpeg",
  "16.jpg", "19.png", "20.png", "21.jpeg"
];
let currentIndex = 0;

// 이미지 객체 생성
const image = new Image();
image.src = `에셋/${imagelist[currentIndex]}`;
image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// 이미지 변경 함수
function strengthen() {
  
  currentIndex = currentIndex + 1;
  image.src = `에셋/${imagelist[currentIndex]}`;
  image.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
}

// 모달 열기 함수
function openTraining() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// 모달 닫기 함수
function closeTraining() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


