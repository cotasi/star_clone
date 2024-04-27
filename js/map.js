import mapdata from '../Data/mapdata.js';

window.addEventListener('DOMContentLoaded', () => {

    // 리스트 필터링
    const findlistall = document.querySelectorAll('.find__list > div');
    const findinput = document.querySelector('.find__input input');
    const findbtn = document.querySelector('.find__input button');

    findlistall.forEach((findel) => (findel.classList.add('off')));

    findbtn.addEventListener('click', (e) => {
        e.preventDefault();
        let values = findinput.value;
        console.log(values);
        let filtereddata = [];
        filtereddata = [...mapdata].filter(item => item.address.includes(values));
        console.log(filtereddata);
        // 리스트 만들기
        const findlist = document.querySelector('.find__list');
        let listtag = ``;
        for (let x in filtereddata) {
            listtag += `<div class="list${x}">`
            listtag += `<div class="container">`
            listtag += `<h2>${filtereddata[x].region}</h2>`
            listtag += `<h3>${filtereddata[x].telphone}</h3>`
            listtag += `<div class="imgpart"><img src="../../images/Map/marker.png" alt="marker"></div>`
            listtag += `</div>`
            listtag += `</div>`;
        }
        findlist.innerHTML = listtag;
    });

    // 지도 그래픽 그리기
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.56770180000001,126.9772803), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(37.56770180000001, 126.9772803);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

});