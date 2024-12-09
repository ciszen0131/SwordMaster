const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

// 이미지 리스트와 초기 설정
const imagelist = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.jpeg", "7.png",
  "8.webp", "9.webp", "12.jpeg", "13.png", "14.jpeg",
  "16.png", "17.png", "19.png", "20.png", "21.jpeg", "final.jpg"
];
const imagename = [
  "+1 영후의 황금비", "+2 원영이의 방사능 홍차", "+3 동규의 강속구를 버티지 못한 야구공", "+4 지원이의 낮잠베개",
  "+5 민겸이의 열차 지연증", "+6 성호의 UWU", "+7 재윤이가 먹고 버린 코코팜", "+8 진혁이의 유튜브 계정", "+9 태영이의 에어팟", "+10 하윤이의 야구모자", "+12 성택이의 오성홍기",
  "+13 이현이의 인스타 DM기록", "+14 건우의 죠스바 후드티", "+15 태겸이의 바이올린", "+16 현원이의 졸음껌", "+17 성주", "+19 아침엔 유찬", 
  "+20 상현이의 망고젤리", "+21 도현이의 D드라이브", "+22 케이셉 html은 프로그래밍 언어야"
]
const percentage = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 7, 5];
const bangji = [1, 2, 3, 5, 8, 12, 18, 25, 35, 50, 75, 110, 160, 230, 330, 500, 750, 1100, 2000, 3000];

let currentIndex = 0;
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
    if (Math.random() * 100 < percentage[currentIndex]) {
      currentIndex++;
      document.getElementById("result").textContent = "강화 성공!";
    } else {
      currentIndex = 0;  // 실패 시 1단계로 돌아감
      document.getElementById("result").textContent = "강화 실패!";
    }
    loadImage(currentIndex);
    toggleShopButton();  // 1단계로 돌아갔을 때 상점 버튼 보이도록 갱신
  }
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
  document.getElementById("modal2").style.display = "block";
  document.getElementById("overlay2").style.display = "block";
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
      alert("1단계일 때만 상점으로 이동할 수 있습니다.");
      shopButton.disabled = false;
    }
  });

  // 1단계일 때만 버튼 활성화
  if (currentIndex === 0) {
    shopButton.disabled = false;
  }
}
