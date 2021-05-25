
    $('.carousel').carousel({
      interval: 2000
    })

    function darkMode() {
      var body = document.body;
      body.classList.toggle("dark-mode");

    var button = document.getElementById("button");
    if(button.innerHTML == "다크모드"){
      button.innerHTML = "라이트모드";
    } else{
      button.innerHTML = "다크모드";
    }
    }
