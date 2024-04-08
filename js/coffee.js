window.addEventListener('DOMContentLoaded',()=>{
    // 커피 서브 페이지 메인 스와이퍼
    var swiper3 = new Swiper('#blendswiper .swiper', {
        pagination: {
            el: '#blendswiper .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '#blendswiper .swiper-button-prev',
            nextEl: '#blendswiper .swiper-button-next'
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
        
    });

    // 멈춤 클릭하면 애니메이션 멈추기
    const pausebtn = document.querySelector('.stop_pause a');

    pausebtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!flag) {
            pausebtn.classList.add('paused');
            swiper3.autoplay.stop();
            flag = true;
        } else {
            pausebtn.classList.remove('paused');
            swiper3.autoplay.start();
            flag = false;
        }
    })
})