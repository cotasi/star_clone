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
})