const toggleBtn = document.querySelector('.navbar-toogleBtn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


  $(document).on('click','#gnb a',function(event){
  var headerHeight = $('header').outerHeight();
  event.preventDefault();
  	$("html,body").animate({
    	scrollTop : $(this.hash).offset().top - headerHeight
    },300)
  });

  $(document).ready(function (){
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop:true,
      autoplay: {
        delay: 2000,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      
    })
    });
  
  
