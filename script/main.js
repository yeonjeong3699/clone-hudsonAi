window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    const videoContainer = document.querySelector('.video-container');
    const seenchroContainer = document.querySelector('.seenchro-container');
    const seenchroWhiteBox = document.querySelector('.seenchro-white-box');
    const seenchroWhite = document.querySelector('.seenchro-white');
    const seenchroLineBox = document.querySelector('.seenchro-line-box');
    const seenchroLine = document.querySelector('.seenchro-line');
    const textBottom = document.querySelector('.text-bottom');

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
        seenchroLineBox.style.position = '';
        seenchroLineBox.style.top = '';
        seenchroLineBox.style.marginTop = '';
        seenchroLine.style.opacity = '';
    }

    if (scrollY >= 3500) {
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
        seenchroLineBox.style.position = 'static';
        seenchroLineBox.style.marginTop = '';
    }
})