function logar() {
  const digEmail = document.getElementById("email");
  const digSenha = document.getElementById("senha");
  const underline = document.querySelectorAll(".underline");
  const msgErro = document.getElementById("msg_erro");

  // Carrega a lista de usuários do localStorage
  const listUser = JSON.parse(localStorage.getItem("listUser") || "[]");

  // Verifica se o email está cadastrado
  const userExistente = listUser.find((user) => user.email === digEmail.value);

  if (userExistente) {
    // Verifica se a senha é válida
    if (userExistente.senha === digSenha.value) {
      // Salva o usuário logado e redireciona para a página de login
      localStorage.setItem("usuarioLogado", JSON.stringify(userExistente));
      alert("Login realizado com sucesso!");
      window.location.href = "catalogo.html";
    } else {
      // Email cadastrado, mas senha incorreta
      underline[1].style.background = "#e63636"; // Destaca o campo de senha
      alert("Senha incorreta. Tente novamente.");
      msgErro.style.display = "block";
      msgErro.innerHTML = "Senha incorreta. Tente novamente.";
    }
  } else {
    // Email não cadastrado
    underline[0].style.background = "#e63636"; // Destaca o campo de email
    alert("Email não cadastrado. Redirecionando para a página inicial...");
    msgErro.style.display = "block";
    msgErro.innerHTML = "Email não cadastrado. Redirecionando...";

    // Redireciona para a página inicial após 2 segundos
    setTimeout(() => {
      window.location.href = "./cadastro.html";
    }, 2000);
  }
}

// Validação em tempo real para remover erros visuais
document.getElementById("email").addEventListener("input", () => {
  document.querySelectorAll(".underline")[0].style.background =
    "linear-gradient(to right, #1e0141 0%, #03008f 100%)";
  document.getElementById("msg_erro").style.display = "none";
});

document.getElementById("senha").addEventListener("input", () => {
  document.querySelectorAll(".underline")[1].style.background =
    "linear-gradient(to right, #1e0141 0%, #03008f 100%)";
  document.getElementById("msg_erro").style.display = "none";
});
