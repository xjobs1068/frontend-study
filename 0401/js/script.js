function activeMenu(index) {
    var eLinks = document.getElementsByClassName("nat_text");

    for (var i = 0; i < eLinks.length; i++) {
      var eLink = eLinks[i];

      eLink.className = "nat_text";
      if (i === index) {
        eLink.className += " active";
      }
    }
  }

  function changeImage(filename) {
    document.getElementById("myImage").src = filename;
  }

  function onClickMenu(index) {
    var imageArr = ["https://i.imgur.com/t3Geo3i.png", "https://i.imgur.com/1w7zx1q.png", "https://i.imgur.com/wSKWXE4.png", "https://i.imgur.com/xleP5qM.png"];

    activeMenu(index);
    changeImage(imageArr[index]);
  }