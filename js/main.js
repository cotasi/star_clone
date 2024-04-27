window.addEventListener('DOMContentLoaded',()=>{
    // 첫번째 접속 시, #visual에 .animate 추가
    var isFirstvisit = localStorage.getItem('firstVisit');

    if(!isFirstvisit) {
        const visual = document.getElementById('visual');
        visual.classList.add('animate');
    }
   
    // 공지사항 스와이퍼

    var swiper = new Swiper(".notice_swiper", {
       direction: 'vertical',
       loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
      });

    // 프로모션 스와이퍼
      // 첫번째는, swiper1에 acitve class를 넣는다.
      const swiper1 = document.querySelector('.promotion_slider > .swiper1');
      swiper1.classList.add('active');

      // 나의 현재페이지는 1이다.
      let currentpage = 1;

      // 오른쪽 버튼을 누르면, promotion_slider가 오른쪽으로 한번당 -100% 이동
      // 오른쪽 버튼
      const rightbtn = document.querySelector('.promotion_wrap > .next');

      const promotion_slider = document.querySelector(".promotion_slider");

      // 버튼을 누르면

      rightbtn.addEventListener('click',function() {
        // promotion_slider
        const promotion_slider = document.querySelector(".promotion_slider");
        // 자식중 첫번째 요소였던 li를 부모의 마지막 요소로 보낸다.
        const firstli = promotion_slider.firstElementChild;

        if (firstli) {
          promotion_slider.appendChild(firstli);
        }

        promotion_slider.style.marginLeft = `-${829 * currentpage}` + "px";

        // currentpage 증가
        currentpage++;

        if (currentpage == 3) {
          currentpage = 0;
        }

        // active 전체 삭제
        promotion_slider.querySelectorAll("li").forEach((v, i) => {
          v.classList.remove("active");
        });
        promotion_slider.querySelectorAll("li")[1].classList.add("active");
      })

    // 프로모션 클릭
    const clicks = document.querySelector('.pr');
    const ch = document.querySelector('.pr i');
    const promo = document.querySelector('.promotion');
    let flag = false;

    clicks.addEventListener('click',()=>{
        if(!flag) {
            promo.classList.add('on');
            ch.classList.add('on');
            flag = true;
        } else {
            promo.classList.remove('on');
            ch.classList.remove('on');
            flag = false;
        }
    });


    

})