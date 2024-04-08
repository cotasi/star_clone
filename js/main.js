window.addEventListener('DOMContentLoaded',()=>{
   
    // 검색 포커스 처리
    const search = document.querySelector('.search')
    const input = search.querySelector('.search input');
    const inputbtn = search.querySelector('.search a');

    inputbtn.addEventListener('click',()=>{
        input.focus();
    })

    input.addEventListener('focus',()=>{
        search.classList.add('focused');
        input.setAttribute('placeholder','통합검색');
    })

    input.addEventListener('blur',()=>{
        search.classList.remove('focused');
        input.setAttribute('placeholder','');
    });

    // visual 파트 이미지 반응형 바뀌기
    const fizzio = document.querySelector('.fizzio img');
    const brew = document.querySelector('.brew img');
    const cream = document.querySelector('.cream img');
    const changeImage = () => {
        console.log('호출');
        if(window.innerWidth <= 960) {
            fizzio.setAttribute('src','./images/visual_fizzio_reverse.png');
            brew.setAttribute('src','./images/visual_brew_reverse.png');
            cream.setAttribute('src','./images/visual_cream_reverse.png');
        } else {
            fizzio.setAttribute('src','./images/visual_fizzio.png');
            brew.setAttribute('src','./images/visual_brew.png');
            cream.setAttribute('src','./images/visual_cream.png');
        }
    }

    changeImage();

    window.onresize = () => {
        changeImage();
    }

    // visual part animation 
    anime({
        targets: fizzio,
        easing: 'easeInOutExpo',
        keyframes:[
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
       duration: 4000
    });

    anime({
        targets: brew,
        easing: 'easeInOutExpo',
        keyframes:[
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
       duration: 4000
    })

    anime({
        targets: cream,
        easing: 'easeInOutExpo',
        keyframes:[
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
       duration: 4000
    })

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


    // 푸터 버튼 생기기
    const mainbtn = document.querySelectorAll('footer > .container .menu > li > a');
    const changebtn = () => {
        if(window.innerWidth <= 720) {
            mainbtn.forEach((ele)=>{
                ele.classList.add('menus');
                ele.addEventListener('click',(e)=>{
                    e.preventDefault();
                    if(!flag) {
                        ele.classList.add('on');
                        flag = true;
                    } else {
                        ele.classList.remove('on');
                        flag = false;
                    }
                    
                })
            })
        } else {
            mainbtn.forEach((ele)=>{
                ele.classList.remove('menus');
            })
        }
    }

   changebtn();

   window.onresize = changebtn;

})