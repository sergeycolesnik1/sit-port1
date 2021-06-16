function burgHed() {

    let hedBtn = document.querySelector('.header__burger');
    let hedNav = document.querySelector('.header__nav');

    hedBtn.onclick = function () {
        if (hedNav.style.top == -400 +"px") {
            hedNav.style.top = 79 +"px";

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
//---------------------------
function corzBurgerCart() {
    document.onclick = (e) => {
        if (e.target.classList.contains( "main__cart-img")) {
            mainCorzCart.style.top = 0 + "px";
            mainCorzCart.style.opacity = 1;
              mainNav.style.opacity = 0;
        }
        else if (e.target.classList.contains("main__header-img")) {
           mainCorz.style.top = 0 + "px";
            mainCorz.style.opacity = 1;
              mainNav.style.opacity = 0;
        }else if (e.target.classList.contains("main__li-btn")){
            mainCorz.style.top = 0 + "px";
            mainCorz.style.opacity = 1;
              mainNav.style.opacity = 0;
            // console.log(e.target.classList);
        } else if (e.target.classList.contains("corz-plus")) {
             plusCurent(e.target.dataset.id);
            // console.log(e.target.id);
                
            // console.log(e.target.classList);
        } else if (e.target.classList.contains("corz-minus")) {
             minusCurent(e.target.dataset.id);
            console.log(e.target.id);
           
        } 

      
    }
    let mainCorz = document.querySelector('.main__corz');
      let corzBtn = document.querySelector('.corz__burger');
     let mainCorzCart = document.querySelector('.main__corz-cart');
     let corzBtnCart = document.querySelector('.corz__burger-cart');
     let mainNav = document.querySelector('.main__header-nav');

    
    corzBtnCart.onclick = function () {
        mainCorzCart.style.top = -800 + "px";
        mainNav.style.opacity = 1;
        
    }

      corzBtn.onclick = function () {
      mainCorz.style.top = -800 +"px";
      mainNav.style.opacity = 1;
        
    }
    let mcCrz = document.querySelector('.mc-crz');
    let cor = {
        "1234445": "1",
        "1234444": "2"
    };

    function plusCurent(id) {
        cor[id]++;
        renderCor();

    }
   
    function minusCurent(id) {
        if (cor[id] - 1 == 0) {
            deliteCor(id);
            return true;
        }
        cor[id]--;
 renderCor();
    }
    function renderCor() {
        console.log(cor);
    }
   function deliteCor(id) {
       delete cor[id];
       renderCor();
    }

}
 corzBurgerCart();
