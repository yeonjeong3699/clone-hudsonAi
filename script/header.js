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

window.addEventListener('scroll', function(){
    const scrollY = window.scrollY;
    const h1Img = document.querySelector('h1 > a > img');
    const menuBoxList = document.querySelectorAll('.menu-box > li > a');

    if(scrollY <= 9399){
        h1Img.style.filter ='';
        menuBtn.style.filter ='';

        menuBoxList.forEach((item)=>{
            item.style.filter ='';
        })
    }

    if(scrollY >= 9400){
        h1Img.style.filter ='brightness(20%)';
        menuBtn.style.filter ='brightness(20%)';

        menuBoxList.forEach((item)=>{
            item.style.filter ='brightness(20%)';
        })
    }

    if(scrollY >= 10400){
        h1Img.style.filter ='';
        menuBtn.style.filter ='';

        menuBoxList.forEach((item)=>{
            item.style.filter ='';
        })
    }
})