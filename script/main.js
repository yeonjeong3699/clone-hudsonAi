window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    const videoContainer = document.querySelector('.video-container');
    const seenchroContainer = document.querySelector('.seenchro-container');
    const seenchroWhiteBox = document.querySelector('.seenchro-white-box');
    const seenchroWhite = document.querySelector('.seenchro-white');
    const seenchroLineBox = document.querySelector('.seenchro-line-box');
    const seenchroLine = document.querySelector('.seenchro-line');
    const textBottom = document.querySelector('.text-bottom');
    const contentWrapper = document.querySelector('.content-wrapper');
    const content01 = document.querySelector('.content01');
    const content02 = document.querySelector('.content02');
    const content03 = document.querySelector('.content03');


    console.log(scrollY);

    if (scrollY >= 600) {
        videoContainer.style.paddingTop = '0px';
        videoContainer.style.opacity = '1';
    }

    if (scrollY >= 1500) {
        seenchroContainer.style.paddingTop = '0px';
        seenchroContainer.style.opacity = '1';
    }

    if (scrollY >= 2300) {
        seenchroWhiteBox.style.position = 'fixed';
        seenchroWhiteBox.style.top = '220px';
        seenchroWhite.style.width = '245%';
    }

    if (scrollY <= 2299) {
        seenchroWhiteBox.style.position = '';
        seenchroWhiteBox.style.top = '';
        seenchroWhite.style.width = '';
        seenchroWhite.style.opacity = '1';
    }

    if (scrollY >= 2400) {
        seenchroWhite.style.width = '179%';
    }

    if (scrollY >= 2500) {
        seenchroWhite.style.width = '127%';
    }

    if (scrollY >= 2600) {
        seenchroWhite.style.width = '90%';
    }

    if (scrollY >= 2700) {
        seenchroWhite.style.width = '65%';
    }

    if (scrollY >= 2800) {
        seenchroWhite.style.width = '53%';
    }

    if (scrollY >= 2900) {
        seenchroWhite.style.width = '52%';
        seenchroWhite.style.opacity = '0.8';
    }

    if (scrollY >= 3000) {
        seenchroWhite.style.opacity = '0.5';
    }

    if (scrollY >= 3100) {
        seenchroWhite.style.opacity = '0.3';
    }

    if (scrollY >= 3200) {
        seenchroWhite.style.opacity = '0.1';
    }

    if (scrollY >= 3300) {
        seenchroWhite.style.opacity = '0.03';
    }

    if (scrollY >= 3400) {
        seenchroWhite.style.opacity = '0';
        seenchroLineBox.style.position = 'fixed';
        seenchroLineBox.style.top = '200px';
        seenchroLineBox.style.marginTop = '0px';
        seenchroLine.style.opacity = '0.05';
    }

    if (scrollY <= 3399) {
        seenchroLine.style.opacity = '';
    }

    if (scrollY >= 3500) {
        seenchroWhiteBox.style.position = '';
        seenchroLine.style.opacity = '0.35';
    }

    if (scrollY >= 3600) {
        seenchroLine.style.opacity = '0.65';
    }

    if (scrollY >= 3700) {
        seenchroLine.style.opacity = '0.8';
    }

    if (scrollY >= 3800) {
        seenchroLine.style.opacity = '1';
    }

    if (scrollY >= 3900) {
        textBottom.style.opacity = '0.5';
        textBottom.style.transform = 'scale(0.8)';
        textBottom.style.marginTop = '270px';
    }

    if (scrollY <= 3899) {
        textBottom.style.opacity = '';
        textBottom.style.transform = '';
        textBottom.style.marginTop = '';
    }

    if (scrollY >= 4000) {
        textBottom.style.opacity = '0.7';
        textBottom.style.transform = 'scale(0.85)';
        textBottom.style.marginTop = '140px';
    }

    if (scrollY >= 4100) {
        textBottom.style.opacity = '0.8';
        textBottom.style.transform = 'scale(0.9)';
        textBottom.style.marginTop = '50px';
    }

    if (scrollY >= 4200) {
        textBottom.style.opacity = '0.9';
        textBottom.style.transform = 'scale(0.95)';
        textBottom.style.marginTop = '20px';
    }

    if (scrollY >= 4300) {
        seenchroLineBox.style.position = '';
        seenchroLineBox.style.marginTop = '';
    }

    if (scrollY >= 5200) {
        contentWrapper.style.position = 'fixed';
        contentWrapper.style.top = '158px';
        contentWrapper.style.left = '50%';
        contentWrapper.style.transform = 'translateX(-50%)';
    }

    if (scrollY <= 5199) {
        contentWrapper.style.position = '';
        contentWrapper.style.top = '';
        contentWrapper.style.left = '';
        contentWrapper.style.transform = '';
    }

    if (scrollY >= 5300) {
        content01.style.opacity = '0.5';
    }

    if (scrollY <= 5299) {
        content01.style.opacity = '';
    }

    if (scrollY >= 5400) {
        content01.style.opacity = '0.1';
    }

    if (scrollY >= 5500) {
        content01.style.opacity = '0';
        content02.style.opacity = '0.1';
    }

    if (scrollY <= 5499) {
        content02.style.opacity = '0';
    }

    if (scrollY >= 5600) {
        content02.style.opacity = '0.5';
    }

    if (scrollY >= 5700) {
        content02.style.opacity = '1';
    }

    if (scrollY >= 6700) {
        content02.style.opacity = '0.5';
    }

    if (scrollY >= 6800) {
        content02.style.opacity = '0.1';
    }

    if (scrollY >= 6900) {
        content02.style.opacity = '0';
        content03.style.opacity = '0.1';
    }

    if (scrollY <= 6899) {
        content03.style.opacity = '0';
    }

    if (scrollY >= 7000) {
        content03.style.opacity = '0.5';
    }

    if (scrollY >= 7100) {
        content03.style.opacity = '1';
    }

    if (scrollY >= 8100) {
        content03.style.opacity = '1';
        contentWrapper.style.position = '';
        contentWrapper.style.top = '';
        contentWrapper.style.left = '';
        contentWrapper.style.transform = '';
        contentWrapper.style.marginTop = '3262px';
    }

    if (scrollY <= 8099) {
        contentWrapper.style.marginTop = '';
    }
})

//animation-wrapper
const hudsonImg01 = document.querySelector('.hudson-img01');
hudsonImg01.id = 'hudsonImg01';

const hudsonImg01Clone = hudsonImg01.cloneNode(true);
hudsonImg01Clone.id = 'hudsonImg01Clone';

document.querySelector('.animation-box01').appendChild(hudsonImg01Clone);

document.querySelector('#hudsonImg01').style.left = '0px';
document.querySelector('#hudsonImg01Clone').style.left = hudsonImg01.offsetWidth + 'px';

hudsonImg01.classList.add('original');
hudsonImg01Clone.classList.add('clone');


const hudsonImg02 = document.querySelector('.hudson-img02');
hudsonImg02.id = 'hudsonImg02';

const hudsonImg02Clone = hudsonImg02.cloneNode(true);
hudsonImg02Clone.id = 'hudsonImg02Clone';

document.querySelector('.animation-box02').appendChild(hudsonImg02Clone);

document.querySelector('#hudsonImg02').style.left = '0px';
document.querySelector('#hudsonImg02Clone').style.left = hudsonImg02.offsetWidth + 'px';

hudsonImg02.classList.add('original');
hudsonImg02Clone.classList.add('clone');


const hudsonImg03 = document.querySelector('.hudson-img03');
hudsonImg03.id = 'hudsonImg03';

const hudsonImg03Clone = hudsonImg03.cloneNode(true);
hudsonImg03Clone.id = 'hudsonImg03Clone';

document.querySelector('.animation-box03').appendChild(hudsonImg03Clone);

document.querySelector('#hudsonImg03').style.left = '0px';
document.querySelector('#hudsonImg03Clone').style.left = hudsonImg03.offsetWidth + 'px';

hudsonImg03.classList.add('original');
hudsonImg03Clone.classList.add('clone');