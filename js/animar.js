const bntMobile = document.querySelector(".btn-menu-mobile");
const navegacaoMob = document.querySelector(".navegacao-mobile");

bntMobile.addEventListener("click", () => {
  console.log("botao clicado");
  navegacaoMob.classList.toggle("abrir");
  bntMobile.classList.toggle("ativo");
});
