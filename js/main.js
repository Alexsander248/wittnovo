//Declaração de variáveis
var videoPlayer = document.querySelector(".player_video");
var displayPlayer = document.querySelector(".botoes");
var botao = document.querySelectorAll(".button");
var videoView = document.querySelector(".video_view");
var tempo = document.querySelector(".tempo");
var hora, minuto, segundo, horaAtual, minutoAtual, segundoAtual;
var barraProgresso = document.querySelector(".barra_progresso");
var videoCarregado = document.querySelector(".video_carregado");
var videoProgresso = document.querySelector(".video_progresso");
var porcentagemTempo;
var regula = document.querySelector(".regula");
var regulaVol = document.querySelector(".regula_vol");
var regulando = false;
var preLoader = document.querySelector(".c-loader")
var carrossel3 = document.querySelector(".carrossel2")

// função que faz o display subir
videoPlayer.addEventListener("mouseover", () => {
    displayPlayer.classList.add("slide-top")
    displayPlayer.classList.remove("slide-bottom")
});

// função que faz o display descer
videoPlayer.addEventListener("mouseout", () => {
    displayPlayer.classList.remove("slide-top")
    displayPlayer.classList.add("slide-bottom")
});

// função que faz o botão dar play
botao[0].addEventListener("click", () =>{
    videoView.play()
    var intervaloTempo = setInterval(atualizaTempo, 100);
    if(window.getComputedStyle(botao[0]).getPropertyValue("display") == "block"){
        botao[0].style.display = "none"
        botao[1].style.display = "block"
    }
});

// função que faz o botão dar pause
botao[1].addEventListener("click", () =>{
    videoView.pause()
    if(window.getComputedStyle(botao[1]).getPropertyValue("display") == "block"){
        botao[1].style.display = "none"
        botao[0].style.display = "block"
    }
});

// função que faz o preloader aparecer e sumir
videoView.addEventListener("waiting", loader)
videoView.addEventListener("playing", loader)

// função que volta 5 segundos
botao[2].addEventListener("click", () =>{
    videoView.currentTime -= 5;
});

botao[3].addEventListener("click", () =>{
    mute()
}); 

//botao que faz ficar mudo
botao[4].addEventListener("click", () => {
    mute()
})

botao[5].addEventListener("click", () => {
    mute()
})

botao[6].addEventListener("click", () =>{
    toggleFullScreen()
    if(window.getComputedStyle(botao[6]).getPropertyValue("display") == "block"){
        botao[6].style.display = "none"
        botao[7].style.display = "block"
    }
});

botao[7].addEventListener("click", () =>{
    toggleFullScreen()
    if(window.getComputedStyle(botao[7]).getPropertyValue("display") == "block"){
        botao[7].style.display = "none"
        botao[6].style.display = "block"
    }
});

function mute(){
    if(!videoView.muted){
        videoView.muted= true;
        botao[3].style.display = "block";
        botao[4].style.display = "none";
        botao[5].style.display = "none";

    }else{
        videoView.muted = false
        botao[3].style.display = "none";
        botao[4].style.display = "block";
        botao[5].style.display = "none";
    }
}

function comecaArrastar(evento){
    if(evento.type == "mousedown"){
        regulando = true
    }else{
        regulando = false
    }
}

function loader(evento){
    switch(evento.type){
        case "waiting":
            preLoader.style.display = "block";
            break;
        case "playing":
            preLoader.style.display = "none";
    }
}

regula.addEventListener("mousedown", comecaArrastar)
regula.addEventListener("mouseup", comecaArrastar)
regula.addEventListener("mousemove", mostraVolume)

function mostraVolume(evento){
    
    if(regulando){
        var w = regula.offsetWidth;
        var x = evento.offsetX;
        var porcentagemVolume = (x/w);
        
        regulaVol.style.width = x + "px"
        videoView.volume = porcentagemVolume


        if(porcentagemVolume == 0){
            botao[3].style.display = "block";
            botao[4].style.display = "none";
            botao[5].style.display = "none";
        }else if(porcentagemVolume > 0 && porcentagemVolume <=0.5){
            botao[3].style.display = "none";
            botao[4].style.display = "none";
            botao[5].style.display = "block";
        }else{
            botao[3].style.display = "none";
            botao[4].style.display = "block";
            botao[5].style.display = "none";
        }
    }
}


//função que aceita o clique e altera o tempo atual do vídeo
barraProgresso.addEventListener("click", function (evento){
    var largurabarra = barraProgresso.offsetWidth;
    var clicadoX = evento.offsetX;
    var tempoClicado = (clicadoX / largurabarra) * videoView.duration;
    videoView.currentTime = tempoClicado
    videoProgresso.style.width = (clicadoX / largurabarra) * 100 + "%";
})



document.addEventListener("keydown", function (evento){
    var tecla = evento.key
    console.log(tecla)

    // faz a seta voltar 5 segundos
    if(tecla == "ArrowLeft"){
        videoView.currentTime -= 5;
    }

    // faz a seta avançar 5 segundos
    if(tecla == "ArrowRight"){
        videoView.currentTime += 5;
    }

    if(tecla == "ArrowUp"){
        alert("aumenta volume")
    }

    if(tecla == "ArrowDown"){
        alert("abaixa volume")
    }
});  

// Função que atualiza o tempo do player
function atualizaTempo(){

    //função que atualiza a barra de tempo do video
    porcentagemTempo = (videoView.currentTime / videoView.duration) * 100;
    videoProgresso.style.width = String(porcentagemTempo) + "%";

    //duração total do vídeo
    hora = Math.floor(videoView.duration/3600);
    minuto = Math.floor(videoView.duration/60);
    segundo = Math.floor(((videoView.duration/60) %1) *60);

    //tempo atual do video
    horaAtual = Math.floor(videoView.currentTime / 3600);
    minutoAtual = Math.floor(videoView.currentTime/60);
    segundoAtual = Math.floor(((videoView.currentTime/60) %1) *60);

    tempo.innerHTML = temporizador(horaAtual, minutoAtual, segundoAtual) + "/" + temporizador(hora, minuto, segundo)
}

// função que converte a duração em segundos pra HH:MM:SS
function temporizador(horas, minutos, segundos){
    if(horas < 10 && horas > 0){
        horas = "0" + String(horas) + ":";
    }else{
        horas = "";
    }

    if(minutos<10){
        minutos = "0" + String(minutos);
    }else if(minutos > 59){
        minutos = minutos - (Math.floor(minutos / 60)*60);
    }

    if(segundos < 10){
        segundos = "0" + String(segundos);
    }

    return String(horas) + String(minutos) + ":" + String(segundos)
}

function toggleFullScreen() {
  
    // Verificar se o navegador suporta a API de tela cheia
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
      // Verificar se o vídeo está em tela cheia
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        // Se o vídeo já estiver em tela cheia, sair do modo de tela cheia
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        // Atualizar o ícone do botão de tela cheia
      } else {
        // Se o vídeo não estiver em tela cheia, colocá-lo em tela cheia
        if (videoView.requestFullscreen) {
          videoView.requestFullscreen();
        } else if (videoView.webkitRequestFullscreen) {
          videoView.webkitRequestFullscreen();
        } else if (videoView.mozRequestFullScreen) {
          videoView.mozRequestFullScreen();
        } else if (videoView.msRequestFullscreen) {
          videoView.msRequestFullscreen();
        }
        // Atualizar o ícone do botão de tela cheia
      }
    } else {
      // Se o navegador não suportar a API de tela cheia, exibir uma mensagem de erro
      alert("Your browser does not support fullscreen mode.");
    }
  }












