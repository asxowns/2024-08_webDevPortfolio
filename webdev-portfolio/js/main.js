
//nav바 클릭하면 해당영역으로 부드럽게 이동(스크롤)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[data-scroll]");

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});


// top버튼
// 버튼 요소 가져오기
let mybutton = document.getElementById("topBtn");

// 사용자가 페이지를 20px 이상 스크롤하면 버튼을 보여줌
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// 사용자가 버튼을 클릭하면 페이지 상단으로 스크롤
mybutton.onclick = function() {
  smoothScrollToTop();
}

function smoothScrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
