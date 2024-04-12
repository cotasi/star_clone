window.addEventListener('DOMContentLoaded',()=>{
// 줌인효과
    // 이미지 컨테이너의 좌표를 구하자. 
    const imgcontainer = document.querySelector('main #description .container .imgpart');
    const lens = document.querySelector('.zoom_lens');
    const concor = imgcontainer.getBoundingClientRect();
    const lencor = lens.getBoundingClientRect();
    const zoomwin = document.querySelector('.zoom_window');

    imgcontainer.addEventListener('mouseover',()=>{
        lens.style.display = `block`;
        zoomwin.style.display = 'block';
    })
    imgcontainer.addEventListener('mouseleave',()=>{
        lens.style.removeProperty('display');
        zoomwin.style.removeProperty('display');
    });

    //mousemove 이벤트
    imgcontainer.addEventListener('mousemove',(e)=>{
        // 마우스 포인터 위치값.
        let mousex = e.clientX;
        let mousey = e.clientY;
        let leftx = mousex - (1/2*lens.clientWidth + concor.left);
        let lefty = mousey - (1/2*lens.clientHeight + concor.top);
        if(leftx >= imgcontainer.clientWidth - lens.clientWidth) { leftx = imgcontainer.clientWidth - lens.clientWidth - 1; }
        if(leftx < 0) { leftx = 0;}
        if(lefty >= imgcontainer.clientHeight - lens.clientHeight) { lefty = imgcontainer.clientHeight - lens.clientHeight - 1;}
        if(lefty < 0) { lefty = 0;}
        lens.style.left = `${leftx}` + 'px';
        lens.style.top = `${lefty}` + 'px';

        let windowx = mousex - concor.left;
        let windowy = mousey - concor.top;
        if(mousex >= concor.left + imgcontainer.clientWidth) {
            windowx = concor.left + imgcontainer.clientWidth;
        }
        if(mousex <= concor.left) {
            windowx = 0;
        }
        if(mousey >= concor.top + imgcontainer.clientHeight) {
            windowy = concor.top + imgcontainer.clientHeight;
        }
        if(mousey <= concor.top) {
            windowy = 0;
        }
        zoomwin.style.backgroundPositionX = `-${windowx}` + 'px';
        zoomwin.style.backgroundPositionY = `-${windowy}` + 'px';
    })
});