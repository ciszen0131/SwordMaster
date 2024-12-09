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

// 첫 번째 캔버스와 컨텍스트 초기화
const canvas1 = document.getElementById('husuabi');
const ctx1 = canvas1.getContext('2d');

// 두 번째 캔버스와 컨텍스트 초기화
const canvas2 = document.getElementById('swingCanvas');
const ctx2 = canvas2.getContext('2d');

// 허수아비 이미지 객체 생성
const husuabiImage = new Image();
husuabiImage.src = '허수아비.png';

// 허수아비 캔버스 그리기 함수
function drawTrainingCanvas() {
  const maxGap = 100; // 최대 간격
  const minGap = 30; // 최소 간격 (화면이 작을 경우)
  const gap = Math.min(maxGap, Math.max(minGap, canvas1.width / 12)); // 동적 간격 계산

  const imageHeight = canvas1.height * 0.7; // 이미지 높이를 캔버스 높이의 70%로 설정
  const aspectRatio = husuabiImage.width / husuabiImage.height;
  const imageWidth = imageHeight * aspectRatio; // 비율에 맞춘 이미지 너비

  const secondHusuabiX = canvas1.width / 2 - imageWidth / 2; // 두 번째 허수아비의 X 좌표
  const firstHusuabiX = secondHusuabiX - (imageWidth + gap); // 첫 번째 허수아비의 X 좌표

  ctx1.clearRect(0, 0, canvas1.width, canvas1.height); // 캔버스 초기화

  for (let i = 0; i < 3; i++) {
    const x = firstHusuabiX + i * (imageWidth + gap); // 동적 간격을 기반으로 위치 계산
    ctx1.drawImage(husuabiImage, x, canvas1.height * 0.15, imageWidth, imageHeight);
  }
}

// 화면 크기 변경 시 크기 업데이트 및 허수아비 다시 그리기
function setCanvasSize() {
  const container = document.getElementById('canvas-container');
  canvas1.width = container.offsetWidth; // 컨테이너 너비에 맞춤
  canvas1.height = container.offsetHeight; // 컨테이너 높이에 맞춤
  drawTrainingCanvas(); // 허수아비 다시 그리기
}

// 초기 설정
husuabiImage.onload = setCanvasSize;
window.addEventListener('resize', setCanvasSize); // 화면 크기 변경 시 크기 업데이트
let EndingItem = 0; // 애니메이션 결과값 저장 변수

// Swing 애니메이션
const swingImage = new Image(); // Swing 애니메이션에 사용할 이미지
swingImage.src = `에셋/${imagelist[currentIndex]}`;

let posX, posY;
const targetX = -400; // 애니메이션이 멈출 위치

function initSwingAnimation() {
  const container = document.getElementById('canvas-container');
  
  // 캔버스 크기와 중앙 기준 설정
  posX = container.offsetWidth + 100; // 컨테이너 너비 기준 시작 위치
  posY = container.offsetHeight / 2 - 40; // 허수아비 중앙 기준 (높이 80px 중심)
}

function swingAnimation() {
  const container = document.getElementById('canvas-container');
  
  // 캔버스 크기를 container에 맞게 설정
  canvas2.width = container.offsetWidth;
  canvas2.height = container.offsetHeight;

  // 캔버스 전체를 지워 지나간 부분을 제거
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  // Swing 이미지 그리기
  ctx2.drawImage(swingImage, posX, posY, 150, 100);

  // 이미지 위치 이동
  posX -= 50; // 속도 조정 (더 빠르게 이동)

  // 애니메이션 계속 실행
  if (posX > targetX) {
    requestAnimationFrame(swingAnimation);
  } else {
    // 애니메이션 종료 시 마지막 위치를 지움
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    // EndingItem 확률 결정
    const successRate = currentIndex/10;
    if (Math.random() * 100 < successRate) {
      EndingItem += 1; // 성공 시 EndingItem 증가
      alert(`축하합니다! 광제쌤의 편린을 획득했습니다. 현재 편린 개수: ${EndingItem}`);
    }
  }
}

// Swing 버튼 클릭 이벤트
document.getElementById('swing').addEventListener('click', () => {
  initSwingAnimation(); // 애니메이션 시작 위치 초기화
  swingAnimation(); // 애니메이션 실행
});

// Swing 버튼 클릭 이벤트
document.getElementById('swing').addEventListener('click', () => {
  initSwingAnimation(); // 애니메이션 시작 위치 초기화
  swingAnimation(); // 애니메이션 실행
});



function openShop() {
  document.getElementById("modal2").style.display = "block";
  document.getElementById("overlay2").style.display = "block";
}

function closeShop() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
}