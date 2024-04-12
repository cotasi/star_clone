import coffeedata from '../Data/coffeedata.js';

window.addEventListener('DOMContentLoaded',()=>{
    const menulist = document.querySelector('.menulist');
    let weondoo = '';
    for(let x in coffeedata[0].detail) {
        weondoo += `<div class="list${x}">`
        weondoo += `<div class="titler"><a href="javascript:void(0)">${coffeedata[0].detail[x].typetwo}</a></div>`
        weondoo += `<div class="list_wrap">`
        for(let y in coffeedata[0].detail[x].detailtwo) {
            weondoo += `<div class="each_list">`
            weondoo += `<a href="${coffeedata[0].detail[x].detailtwo[y].link}"><img src="${coffeedata[0].detail[x].detailtwo[y].imgs}" alt="${coffeedata[0].detail[x].detailtwo[y].name}"></a>`
            weondoo += `<h2>${coffeedata[0].detail[x].detailtwo[y].name}</h2>`
            weondoo += `</div>`
        }
        weondoo += `</div>`
        weondoo += `</div>`
    }
    menulist.innerHTML = weondoo;

// 필터링

    // 체크되면, checkeds에 ez_check 클래스를 추가한다.
    // 체크 안되면, ez_check 클래스를 제거한다.
    
    const checkinput = document.querySelectorAll('.bottom input[type="checkbox"]');
    const checktarget = document.querySelectorAll('.bottom .checkeds');
    const listtarget = document.querySelectorAll('.menulist > div');

    checktarget[0].classList.add('ez_check');
    listtarget.forEach((listel)=>(listel.classList.add('on')));
    checkinput.forEach((ele,idx)=>{
        ele.addEventListener('change',()=>{
            if(ele.checked) {
                checktarget.forEach((chel)=>(chel.classList.remove('ez_check')));
                listtarget.forEach((listel)=>(listel.classList.remove('on')));
                checktarget[idx].classList.add('ez_check');
                if(checktarget[0].className == 'checkeds ez_check') {
                    listtarget.forEach((listel)=>(listel.classList.add('on')));
                }
                if(checktarget[idx].className == 'checkeds ez_check' && idx != 0) {
                    listtarget[idx-1].classList.add('on');
                }
            } else {
                checktarget[idx].classList.remove('ez_check');
            }
        })
    })


});