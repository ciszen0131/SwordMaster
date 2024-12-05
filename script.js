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
const imagename = [
  "+2 원영이의 방사능 홍차", "+3 동규의 강속구를 버티지 못한 야구공", "+4 지원이의 낮잠베개",
  "+5 민겸이의 열차 지연증", "+6 성호의 UWU", "+7 진혁이의 유튜브 계정", "+12 성택이의 오성홍기",
  "+13 이현이의 인스타 DM기록", "+14 건우의 죠스바 후드티", "+16 현원이의 졸음껌", "+19 아침엔 유찬", 
  "+20 상현이의 망고젤리", "+21 도현이의 D드라이브"
]
const percentae = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 7, 5];
let currentIndex = 0;
// 이미지 객체 생성
const image = new Image();
image.src = `에셋/${imagelist[currentIndex]}`;
image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// 이미지 변경 함수
function strengthen() {
  if (currentIndex !== imagelist.length - 1) {
    if (Math.random() * 100 < percentae[currentIndex]) {
      document.getElementById("result").textContent = "강화 성공!";
      currentIndex = currentIndex + 1;
      document.getElementById("imageName").textContent = imagename[currentIndex];
      image.src = `에셋/${imagelist[currentIndex]}`;
      image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
    }
    else {
      document.getElementById("result").textContent = "강화 실패!";
      currentIndex = 0;
      image.src = `에셋/${imagelist[currentIndex]}`;
      image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
      document.getElementById("imageName").textContent = imagename[currentIndex];
    }
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

function openShop() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
