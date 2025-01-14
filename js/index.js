// ÁREA DOS PERSONAGENS

document.addEventListener("DOMContentLoaded", () => {
  const personagensImgs = document.querySelectorAll(".Personagens-img");

  // Nomes a serem exibidos, na ordem das imagens
  const nomes = ["Yoru", "Asa Mitaka", "Denji"];

  personagensImgs.forEach((img, index) => {
    // Criar o elemento para o nome da imagem
    const nome = document.createElement("div");
    nome.textContent = nomes[index]; // Atribui o nome baseado no índice da imagem
    nome.style.position = "absolute";
    nome.style.bottom = "-30%"; // Coloca o nome um pouco abaixo da imagem
    nome.style.left = "50%";
    nome.style.transform = "translateX(-50%)"; // Centraliza o nome
    nome.style.fontSize = "20px";
    nome.style.color = "#fff";
    nome.style.opacity = "0"; // Inicialmente invisível
    nome.style.transition = "opacity 0.3s ease"; // Transição suave
    nome.style.visibility = "hidden"; // Inicialmente invisível
    nome.style.whiteSpace = "nowrap"; // Evita quebras de linha

    // Estilo da imagem
    img.style.position = "relative"; // Para permitir o posicionamento do nome
    img.style.transition = "transform 0.3s ease";

    // Adiciona o nome abaixo da imagem
    img.parentElement.style.position = "relative"; // Se a imagem estiver dentro de um elemento
    img.parentElement.appendChild(nome);

    img.addEventListener("mouseenter", () => {
      // Aumenta a imagem e torna o nome visível
      img.style.transform = "scale(1.2)"; // Aumenta a imagem para 120%
      nome.style.opacity = "1"; // Torna o nome visível
      nome.style.visibility = "visible"; // Garante que o nome será visível
    });

    img.addEventListener("mouseleave", () => {
      // Restaura a imagem e esconde o nome
      img.style.transform = "scale(1)"; // Retorna ao tamanho original
      nome.style.opacity = "0"; // Torna o nome invisível
      nome.style.visibility = "hidden"; // Garante que o nome ficará invisível
    });
  });
});

// FIM ÁREA DOS PERSONAGENS

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ÁREA DO VIDEO

// Espera a API do YouTube ser carregada
function onYouTubeIframeAPIReady() {
  const iframe = document.getElementById("videoIframe");

  // Cria um novo objeto player do YouTube
  const player = new YT.Player(iframe, {
    events: {
      onReady: function (event) {
        // O vídeo está pronto para ser controlado
      },
      onStateChange: function (event) {
        // Aqui você pode controlar mudanças no estado do vídeo
      },
    },
  });

  // Detecta o mouse sobre a div do vídeo
  document.querySelector(".Video").addEventListener("mouseenter", function () {
    player.playVideo(); // Inicia o vídeo quando o mouse entra
  });

  // Detecta o mouse saindo da div do vídeo
  document.querySelector(".Video").addEventListener("mouseleave", function () {
    player.pauseVideo(); // Pausa o vídeo quando o mouse sai
  });
}

// Carrega a API do YouTube
var script = document.createElement("script");
script.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(script);

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FIM ÁREA DO VIDEO

// Seleciona todos os personagens
const personagens = document.querySelectorAll(".Personagens-Destaque");

personagens.forEach((personagem) => {
  // Quando o mouse entra, expande e troca a imagem
  personagem.addEventListener("mouseenter", () => {
    personagem.classList.add("expandido"); // Expande a imagem e revela a expandida
  });

  // Quando o mouse sai, restaura o tamanho original e oculta a imagem expandida
  personagem.addEventListener("mouseleave", () => {
    personagem.classList.remove("expandido"); // Restaura a imagem original
  });
});
