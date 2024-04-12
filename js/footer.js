window.addEventListener('DOMContentLoaded',()=>{
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


   // 푸터 슬라이드
   const footerslide = () => {
    if(window.innerWidth <= 1100) {
        const ul = document.querySelector('footer .awards ul');
        const li = document.querySelectorAll('footer .awards ul li');
        let current = 0;
        setInterval(()=>{
            ul.style.left = `${(current + 1) * 33.3}` + '%';
            current++;
            if(current >= 3) {
                current = -1;
            }
            ul.appendChild(li[0]);
        },5000)
    }
   }

   window.onresize = footerslide;


})