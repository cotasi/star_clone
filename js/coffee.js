window.addEventListener('DOMContentLoaded',()=>{

    let flag = false;

    // 선택박스 올리기
    const filterbox = document.querySelector('.filter');
    const filterbtn = document.querySelector('main #filter .container .wrap .title');

    filterbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!flag) {
            filterbox.classList.add('off');
            flag = true;
        } else {
            filterbox.classList.remove('off');
            flag = false;
        }
    })

    
    // 셀렉터 나타나기
    const selector = document.querySelector('.selectors > a');
    const boxes = document.querySelector('#selectors');

        selector.addEventListener('click',(e)=>{
            e.preventDefault();
            if(!flag) {
                boxes.classList.add('height');
                flag = true;
            } else {
                boxes.classList.remove('height');
                flag = false;
            }
        });

})