window.addEventListener('DOMContentLoaded',()=>{
   
   
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

    var swiper2 = new Swiper(".prswi",{
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.prswi .swiper-pagination',
            clickable: 'true'
        },
        navigation: {
            prevEl: '.prswi .swiper-button-prev',
            nextEl: '.prswi .swiper-button-next'
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

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