const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

// 이미지 리스트와 초기 설정
const imagelist = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.jpeg", "7.jpg",
  "8.webp", "9.png", "10.png", "11.png", "12.jpeg", "13.png", "14.jpeg",
  "15.jpg", "16.jpg", "17.png", "18.jpg", "19.png", "20.png", "21.png", "final.jpg"
];
const imagename = [
  "+1 영후의 황금비", "+2 원영이의 방사능 홍차", "+3 동규의 강속구를 버티지 못한 야구공", "+4 지원이의 낮잠베개",
  "+5 민겸이의 열차 지연증", "+6 성호의 UWU", "+7 재윤 렉카 tv", "+8 진혁이의 유튜브 계정", "+9 태영이", "+10 하윤이의 야구모자", 
  "+11 발", "+12 성택이의 오성홍기", "+13 이현이의 인스타 DM기록", "+14 건우의 죠스바 후드티", "+15 태겸이의 바이올린", "+16 현원이의 졸음껌", "+17 성주", 
  "+18 호빈이의 눈꺼풀", "+19 아침엔 유찬", "+20 상현이의 망고젤리", "+21 도현이의 D드라이브", "+MAX 케이셉 html은 프로그래밍 언어야"
]
const percentage = [100, 100, 95, 95, 90, 85, 85, 80, 75, 73, 70, 67, 61, 57, 53, 50, 43, 35, 30, 25, undefined];
const protectionCosts = [
  { protection: 1, price: 1000000 },
  { protection: 3, price: 2500000 }
];
const requireProtection = [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 7, 9, 10, 12];

// 무기 강화 및 판매 리스트 (단계별 강화 비용 및 판매 가격)
const weaponUpgradeAndSell = [
  {"upgradeCost": 300, "sellCost": 0},
  {"upgradeCost": 300, "sellCost": 150},
  {"upgradeCost": 500, "sellCost": 400},
  {"upgradeCost": 500, "sellCost": 600},
  {"upgradeCost": 1000, "sellCost": 800},
  {"upgradeCost": 1500, "sellCost": 1600},
  {"upgradeCost": 2000, "sellCost": 3500},
  {"upgradeCost": 2000, "sellCost": 6100},
  {"upgradeCost": 3000, "sellCost": 10000},
  {"upgradeCost": 5000, "sellCost": 20000},
  {"upgradeCost": 10900, "sellCost": 35100},
  {"upgradeCost": 20000, "sellCost": 160000},
  {"upgradeCost": 35000, "sellCost": 350000},
  {"upgradeCost": 55000, "sellCost": 1000000},
  {"upgradeCost": 100000, "sellCost": 3000000},
  {"upgradeCost": 180000, "sellCost": 7500000},
  {"upgradeCost": 300000, "sellCost": 14200000},
  {"upgradeCost": 300000, "sellCost": 20000000},
  {"upgradeCost": 500000, "sellCost": 30000000},
  {"upgradeCost": 800000, "sellCost": 47500000},
  {"upgradeCost": null, "sellCost": 68300000},
  {"upgradeCost": undefined, "sellCost": Infinity}
]



let currentIndex = 0;
let currentProtection = 0;
let recentIndex;
// 현재 금액
let currentCash = 1000000;
// 이미지 객체 생성
const image = new Image();
image.src = `에셋/${imagelist[currentIndex]}`;
image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};
document.getElementById("imageName").textContent = imagename[currentIndex];
canvas.width = 500;
canvas.height = 400;

// 이미지 변경 함수
function strengthen() {
  if (currentIndex !== imagelist.length - 1) {
    toggleShopButton();  // 강화 시점에 버튼 상태 갱신
    if (currentCash > weaponUpgradeAndSell[currentIndex].upgradeCost) {
      currentCash -= weaponUpgradeAndSell[currentIndex].upgradeCost;
      if (Math.random() * 100 < percentage[currentIndex]) {
        currentIndex++;
        document.getElementById("result").textContent = "강화 성공!";
      } else {
        recentIndex = currentIndex;
        currentIndex = 0;  // 실패 시 1단계로 돌아감
        document.getElementById("result").textContent = "강화 실패!";
      }
      loadImage(currentIndex);
      toggleShopButton();  // 1단계로 돌아갔을 때 상점 버튼 보이도록 갱신
      update();
    }
    else {
      alert("보유 금액이 부족합니다.");
    }
  }
}

function update(){
  document.getElementById("currentCash").textContent = "현재 보유중인 금액 : " + currentCash;
  document.getElementById("currentProtection").textContent = "현재 보유중인 방지권 개수 : " + currentProtection;
  document.getElementById("upgradeCost").textContent = "강화 비용 : " + weaponUpgradeAndSell[currentIndex].upgradeCost;
  document.getElementById("sellCost").textContent = "판매 가격 : " + weaponUpgradeAndSell[currentIndex].sellCost;
  document.getElementById("forcePercentage").textContent = "강화 확률 : " + percentage[currentIndex] + "%";
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
  if (currentIndex === 0) {
    document.getElementById("modal2").style.display = "block";
    document.getElementById("overlay2").style.display = "block";
  }
  else {
    alert("1단계일 때만 상점으로 이동할 수 있습니다.");
  }
}

function closeShop() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
}

function loadImage(index) {
  image.src = `에셋/${imagelist[index]}`;
  image.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    document.getElementById("imageName").textContent = imagename[index];
  };
}

function toggleShopButton() {
  const shopButton = document.getElementById("GotoShop");

  // 버튼 클릭 시 이벤트 리스너 등록
  shopButton.addEventListener('click', function() {
    if (currentIndex !== 0) {
      shopButton.disabled = true;
    }
    shopButton.disabled = false;
  });

  // 1단계일 때만 버튼 활성화
  if (currentIndex === 0) {
    shopButton.disabled = false;
  }
}

function buyProtection() {
  const price = protectionCosts[currentIndex].price;

  if (currentCash >= price) {
    currentCash -= price;
    currentBangji += protectionNeeded;
    update();
  } else {
    alert("보유 금액이 부족합니다.");
  }
}

function sell(){
  currentCash += weaponUpgradeAndSell[currentIndex].sellCost;
  currentBangji = 0;
  currentIndex = 0;
  loadImage(currentIndex);
  update();
}

function protection(){
  if (recentIndex){
    if (currentProtection < requireProtection[recentIndex]){
      alert("보유 방지권이 부족합니다.");
      return;
    }else{
      currentIndex = recentIndex;
      currentProtection -= requireProtection[currentIndex];
      loadImage(currentIndex);
      update();
      recentIndex = 0;
    }
  }
}