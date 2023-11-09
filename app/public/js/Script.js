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


function notify(titulo, texto, tipo, posicao) {
  new Notify({
      status: tipo,
      title: titulo,
      text:texto ,
      effect: 'fade',
      speed: 300,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 1,
      position:posicao 
  })
}

function loadImg() {
  $('#img-preview').attr('src', URL.createObjectURL(event.target.files[0]));
}


