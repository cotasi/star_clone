window.addEventListener('DOMContentLoaded',()=>{
    const loginsave_input = document.querySelector('.login_check input');
    const loginsave_btn = document.querySelector('.login_check .checking');

    loginsave_input.addEventListener('change',()=>{
        if(loginsave_input.checked) {
            loginsave_btn.classList.add('on');
        } else {
            loginsave_btn.classList.remove('on');
        }
    })
})