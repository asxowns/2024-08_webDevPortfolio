
//nav바 클릭하면 해당영역으로 부드럽게 이동(스크롤)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[data-scroll]");
  console.log("Number of scroll links found:", links.length);

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      console.log("Scrolling to:", targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        console.error("Target element not found:", targetId);
      }
    });
  }

  // 첫번째 프로젝트
  const element = document.querySelector(".pj-box1");
  const detail = document.getElementById("pj-box1-detail");
  if (element && detail) {
    element.addEventListener('click', () => {
      detail.style.display = "block";
      requestAnimationFrame(() => {
        detail.style.opacity = 1;
      });
    });
  }

  // 첫번째 프로젝트 디테일 닫기
  const close = document.querySelector("#pj-box1-detail p");
  if (close && detail) {
    close.addEventListener('click', () => {
      detail.style.opacity = 0;
      detail.addEventListener('transitionend', () => {
        detail.style.display = "none";
      }, { once: true });
    });
  }

  // 두번째 프로젝트
  const element2 = document.querySelector(".pj-box2");
  const detail2 = document.getElementById("pj-box2-detail");
  if (element2 && detail2) {
    element2.addEventListener('click', () => {
      detail2.style.display = "block";
      requestAnimationFrame(() => {
        detail2.style.opacity = 1;
      });
    });
  }

  // 두번째 프로젝트 디테일 닫기
  const close2 = document.querySelector("#pj-box2-detail p");
  if (close2 && detail2) {
    close2.addEventListener('click', () => {
      detail2.style.opacity = 0;
      detail2.addEventListener('transitionend', () => {
        detail2.style.display = "none";
      }, { once: true });
    });
  }
});


// top버튼
// 버튼 요소 가져오기
let mybutton = document.getElementById("topBtn");

// 사용자가 페이지를 20px 이상 스크롤하면 버튼을 보여줌
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// 사용자가 버튼을 클릭하면 페이지 상단으로 스크롤
mybutton.onclick = function () {
  smoothScrollToTop();
}

function smoothScrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
