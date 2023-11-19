function changeImage() {
    var menuBotao = document.getElementById("menuButton");
    if (menuBotao.src.endsWith("hamburguer.png")) {
      menuBotao.src = "hamburguer (1).png";
    } else {
      menuButton.src = "hamburguer.png";
    }
  }
  
  document.addEventListener("click", function(event) {
    var submenu = document.getElementsByClassName("submenu")[0];
    var menuBotao = document.getElementById("menuBotao");
    
    if (event.target !== submenu && event.target !== menuButton) {
      submenu.classList.remove("show");
    }
  });
  
  document.getElementById("menuBotao").addEventListener("click", function() {
    var submenu = document.getElementsByClassName("submenu")[0];
    submenu.classList.toggle("show");
  });

