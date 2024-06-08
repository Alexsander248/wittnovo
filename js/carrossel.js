// Selecione o elemento do carrossel
const carrossel = document.querySelector(".carrossel");

// Adicione o evento de "mouseover" para iniciar o carrossel
carrossel.addEventListener("mouseover", () => {
  // Adicione o evento de "wheel" para navegar pelo carrossel usando a roda do mouse
  carrossel.addEventListener("wheel", (e) => {
    // Impedir o comportamento padrão da roda do mouse
    e.preventDefault();
    // Defina a quantidade de deslocamento horizontal ao rolar a roda do mouse
    const scrollStep = 400;
    // Verifique a direção da roda do mouse e ajuste o deslocamento horizontal
    carrossel.scrollLeft += e.deltaY > 0 ? scrollStep : -scrollStep;
  });

  // Adicione o evento de "touchstart" para iniciar o movimento do carrossel em dispositivos móveis
  carrossel.addEventListener("touchstart", (e) => {
    // Obtenha a posição inicial do toque
    const touchStartX = e.touches[0].clientX;
    // Defina uma variável para rastrear se o carrossel está sendo arrastado
    let isDragging = true;

    // Adicione o evento de "touchmove" para atualizar o deslocamento do carrossel enquanto arrasta
    carrossel.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      // Calcule a distância percorrida durante o arraste
      const touchMoveX = e.touches[0].clientX;
      const touchDeltaX = touchStartX - touchMoveX;
      // Atualize a posição do carrossel com base na distância percorrida
      carrossel.scrollLeft += touchDeltaX;
      // Atualize a posição inicial do toque para a próxima iteração
      touchStartX = touchMoveX;
    });

    // Adicione o evento de "touchend" para encerrar o arraste do carrossel
    carrossel.addEventListener("touchend", () => {
      isDragging = false;
    });

    // Adicione o evento de "touchcancel" para lidar com eventos de cancelamento de toque
    carrossel.addEventListener("touchcancel", () => {
      isDragging = false;
    });
  });
});

// Adicione animações suaves ao deslocar o carrossel
carrossel.style.scrollBehavior = "smooth";
