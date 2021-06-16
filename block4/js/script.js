function burgHed() {

    let hedBtn = document.querySelector('.header__burger');
    let hedNav = document.querySelector('.header__nav');

    hedBtn.onclick = function () {
        if (hedNav.style.top == -400 +"px") {
            hedNav.style.top = 79 +"px";

            console.log(hedBtn);
        } else {
     hedNav.style.top = -400 +"px";

        }
    }
}
burgHed();
    //-----------------------------------------------
    function mainBurgHed() {
        let mainNav = document.querySelector('.main__header-nav');
        let mainBtn = document.querySelector('.main__burger');
        let hedNav = document.querySelector('.header__nav');
        

        mainBtn.onclick = function () {
            if (mainNav.style.top  ==  -400 +"px") {
                  mainNav.style.top = 79 +"px";
               hedNav.style.top = -400 +"px";
            } else {
             mainNav.style.top = -400 +"px";
                hedNav.style.top = -400 + "px";

            }
        }
    };

mainBurgHed();
//--------------------------------
//------  Попап---------------------------
function popCartSlid() {
    let slidPopap = document.querySelector('.grup__popap');
    let popapBtn2 = document.querySelector('.p-b3');
   
    let crt1 = document.querySelector('.cart1');
    let crt2 = document.querySelector('.cart2');
    let crt3 = document.querySelector('.cart3');
  
    popapBtn2.onclick = (e) => {  
        slidPopap.style.top = -720 + "px";
    }
    crt1.onclick = () => {   
        slidPopap.style.top = 0 + "px";
    }
    crt2.onclick = () => { 
    slidPopap.style.top = 0 + "px";
    }
    crt3.onclick = () => {
                slidPopap.style.top = 0 + "px";
    }
};
 popCartSlid();
//-----------конец попап ----------------
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
//--------------подключение попап формы---------------
function popForm() {
    let frmStrBtn = document.querySelector('.main__header-btn');
    let popForm = document.querySelector('.form__popap');
    let stopBtnFrm = document.querySelector('.p-b1');
    let BtnFrm = document.querySelector('.popap__btn');

    frmStrBtn.onclick = function () {
        popForm.style.top = 0+"px";
    }
     stopBtnFrm.onclick = function () {
        popForm.style.top = -620+"px";
    }
    BtnFrm.onclick = function (e) {
        e.preventDefault();
         alert('Форма не подключена ЭТО ОБРАЗЕЦ! ');
    }
}
 popForm();
//-------конец форм------------------------

//--------------подключение груп слайдер---------------
