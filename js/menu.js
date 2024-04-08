import menudata from '../Data/menudata.js';

window.addEventListener('DOMContentLoaded', () => {
      // 메뉴 데이터 넣기(PC)
      const menuinsert = document.querySelector('.main-menu');
      let menutag1 = '<ul class="d-flex">'
      for(let x in menudata) {
          menutag1 += `<li><a href="${menudata[x].menuonelink}" class="onedepth">${menudata[x].menuone}</a>`
          menutag1 += `<div class="twodepth">`
          menutag1 += `<ul class="container">`
          for(let y in menudata[x].detail) {
            menutag1 += `<li>`
            menutag1 += `<a href="${menudata[x].detail[y].menutwolink}">${menudata[x].detail[y].menutwo}</a>`
            menutag1 += `<ul class="threedepth">`
            for(let z in menudata[x].detail[y].detailthree) {
                if(menudata[x].detail[y].detailthree[z] != []) {
                    menutag1 += `<li><a href="${menudata[x].detail[y].detailthree[z].menuthreelink}">${menudata[x].detail[y].detailthree[z].menuthree}</a></li>`
                }
            }
            menutag1 += `</ul>`
            menutag1 += `</li>`;
          }
          menutag1 += `</ul>`
          menutag1 += `</div>`
          menutag1 += `</li>`
      } 
      menutag1 += '</ul>';
      menuinsert.innerHTML = menutag1;

    // 메뉴 호버하기
    const ai = document.querySelectorAll('.main-menu > ul > li');
    const aiel = document.querySelectorAll('.onedepth')

    ai.forEach((aiels,idx,arr)=>{
        aiels.addEventListener('mouseover',()=>{
            aiel[idx].classList.add('on');
        });
        aiels.addEventListener('mouseleave',()=>{
            aiel[idx].classList.remove('on');
        })
    });


    // 메뉴 데이터 넣기 (Mobile)
    const menuinsert2 = document.querySelector('.mobile-menu .menues');
    let menutag2 = '';
    for(let k in menudata) {
        menutag2 += `<li><a href="javascript:void(0)"><span>${menudata[k].menuone}</span></a>`;
        menutag2 += `<ul class="two">`
        for(let j in menudata[k].detail) {
            menutag2 += `<li><a href="javascript:void(0)">${menudata[k].detail[j].menutwo}</a>`
            menutag2 += `<ul class="three">`
            for(let u in menudata[k].detail[j].detailthree) {
                menutag2 += `<li><a href="${menudata[k].detail[j].detailthree[u].menuthreelink}">${menudata[k].detail[j].detailthree[u].menuthree}</a></li>`
            }
            menutag2 += `</ul>`
            menutag2 += `</li>`;
        }
        menutag2 += `</ul>`
        menutag2 += `</li>`;
    }
    menuinsert2.innerHTML = menutag2;

    // 모바일 메뉴 클릭하기
    const firstclick = document.querySelectorAll('.mobile-menu .menues > li > a');
    const secondclick = document.querySelectorAll('.two > li > a');
    let flag = false;

    firstclick.forEach((fel,idx)=>{
        firstclick.forEach((ffel)=>(ffel.classList.remove('on')));
        fel.addEventListener('click',()=>{
            if(!flag) {
                fel.classList.add('on');
                flag = true;
            } else {
                fel.classList.remove('on');
                flag = false;
            }
        })
    });

    secondclick.forEach((sel,idx)=>{
        secondclick.forEach((ssel)=>(ssel.classList.remove('on')));
        sel.addEventListener('click',()=>{
            if(!flag) {
                sel.classList.add('on');
                flag = true;
            } else {
                sel.classList.remove('on');
                flag = false;
            }
        })
    });

    // 모바일 메뉴 열기
    const list = document.querySelector('.list');
    const mmenu = document.querySelector('.mobile-menu');
    const close = document.querySelector('.close');
    const visual = document.querySelector('#visual')
    list.addEventListener('click',()=>{
        mmenu.classList.add('tr');
        document.body.classList.add('dimmed');
        visual.classList.add('fixed');
    });
    close.addEventListener('click',()=>{
        mmenu.classList.remove('tr');
        document.body.classList.remove('dimmed');
        visual.classList.remove('fixed');
    })
});