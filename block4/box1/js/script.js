//-------------Бургер хедер-----------
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
//------------ Слайдер ---------------------
function popSlidCart() {
    let stBt1 = document.querySelector('#sld-btn1');
    let stBt2 = document.querySelector('#sld-btn2');
    let stBt3 = document.querySelector('#sld-btn3');
    let stBt4 = document.querySelector('#sld-btn4');
    let stBt5 = document.querySelector('#sld-btn5');
    let stBt6 = document.querySelector('#sld-btn6');

    let slIm1 = document.querySelector('#sld-im1');
    let slIm2 = document.querySelector('#sld-im2');
    let slIm3 = document.querySelector('#sld-im3');
    let slIm4 = document.querySelector('#sld-im4');
    let slIm5 = document.querySelector('#sld-im5');
    let slIm6 = document.querySelector('#sld-im6');

    stBt1.onclick = function (e) {
        slIm1.style.opacity = 1;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;

    }
    stBt2.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 1;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt3.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 1;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt4.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 1;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt5.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 1;
        slIm6.style.opacity = 0;
    }
    stBt6.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 1;
    }
}
popSlidCart();
//----------конец слайда-------------------