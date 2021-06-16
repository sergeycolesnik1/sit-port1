function burgHedMain() {

    let hedBtn = document.querySelector('.header__burger');
    let hedNav = document.querySelector('.header__nav');

    hedBtn.onclick = function () {
        if (hedNav.style.opacity == 1) {
            hedNav.style.opacity = 0;
        } else {
            hedNav.style.opacity = 1;
        }
    }
    let mainNav = document.querySelector('.main__header-nav');
    let mainBtn = document.querySelector('.m-bg');

    mainBtn.onclick = function () {
        if (mainNav.style.opacity == 1) {
            mainNav.style.opacity = 0;
        } else {
            mainNav.style.opacity = 1;
        }
    }
};
burgHedMain();
//--------------------------------