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