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
 
});