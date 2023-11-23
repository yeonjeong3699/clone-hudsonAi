const menuBtn = document.querySelector('.menu-btn');
const menuBox = document.querySelector('.menu-box');

menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('on')) {
        menuBtn.classList.remove('on');
        menuBox.classList.remove('on');
    } else {
        menuBtn.classList.add('on');
        menuBox.classList.add('on');
    }
})