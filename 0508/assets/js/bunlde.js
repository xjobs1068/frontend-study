var a = document.getElementsByClassName('menu-btn')
a[0].addEventListener('click', function(e) {
    var gnbMenu = document.getElementsByClassName('gnb-menu')
    var className = gnbMenu[0].className;

    if(className === "gnb-menu") { // no open
        className = "gnb-menu open";
    } else { // open
        className = "gnb-menu";
    }

    gnbMenu[0].className = className;
});

const swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
      },
    
    autoplay: {
        delay: 3000,
    },
    
    loop: true,
  });