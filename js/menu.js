const btnMobile = document.querySelector(".btn-menu-mobile");
const navegacaoMob = document.querySelector(".navegacao-mobile");

// Adiciona o evento de clique no botão mobile
btnMobile.addEventListener("click", () => {
  // Alternar a classe "abrir" na navegação mobile para mostrar ou ocultar o menu
  navegacaoMob.classList.toggle("abrir");
  // Alternar a classe "ativo" no botão mobile para indicar se o menu está aberto ou fechado
  btnMobile.classList.toggle("ativo");

  // Adiciona um evento de clique fora do menu para fechar o menu ao clicar em qualquer parte da página
  document.addEventListener("click", closeMenuOutside);
});

// Função para fechar o menu mobile ao clicar fora dele
function closeMenuOutside(event) {
  // Verifica se o clique ocorreu dentro da navegação mobile ou no botão mobile
  const isClickInsideMenu = navegacaoMob.contains(event.target);
  const isClickInsideButton = btnMobile.contains(event.target);

  // Se o clique não estiver dentro do menu e do botão, fecha o menu
  if (!isClickInsideMenu && !isClickInsideButton) {
    navegacaoMob.classList.remove("abrir");
    btnMobile.classList.remove("ativo");
    // Remove o evento de clique fora do menu após fechar o menu
    document.removeEventListener("click", closeMenuOutside);
  }
}
