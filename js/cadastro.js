const campos = document.querySelectorAll(".input-required");
const underline = document.querySelectorAll(".underline");
const spans = document.querySelectorAll(".required");
const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

const msgErro = document.getElementById("msg_erro");
const msgSucesso = document.getElementById("msg_sucesso");

function setError(i, message = "") {
  underline[i].style.background = "#e63636";
  spans[i].style.display = "block";
  if (message) spans[i].textContent = message;
}

function validada(i) {
  underline[i].style.background = "#008000";
  spans[i].style.display = "none";
}

function resetError(i) {
  underline[i].style.background =
    "linear-gradient(to right, #1e0141 0%, #03008f 100%)";
  spans[i].style.display = "none";
}

function emailValidate() {
  if (emailRegex.test(campos[0].value)) {
    validada(0);
    return true;
  } else if (campos[0].value.length === 0) {
    resetError(0);
    return false;
  } else {
    setError(0, "Insira um email válido.");
    return false;
  }
}

function senhaValidate() {
  if (campos[1].value.length >= 8) {
    validada(1);
    return true;
  } else if (campos[1].value.length === 0) {
    resetError(1);
    return false;
  } else {
    setError(1, "A senha deve ter pelo menos 8 caracteres.");
    return false;
  }
}

function repeteSenhaValidate() {
  if (campos[2].value === campos[1].value) {
    validada(2);
    return true;
  } else if (campos[2].value.length === 0) {
    resetError(2);
    return false;
  } else {
    setError(2, "As senhas não coincidem.");
    return false;
  }
}

function validarCampos() {
  const emailValido = emailValidate();
  const senhaValida = senhaValidate();
  const confSenhaValida = repeteSenhaValidate();

  return emailValido && senhaValida && confSenhaValida;
}

function cadastrar() {
  // Valida todos os campos antes de prosseguir
  if (validarCampos()) {
    const listUser = JSON.parse(localStorage.getItem("listUser") || "[]");
    listUser.push({
      email: campos[0].value,
      senha: campos[1].value,
    });

    localStorage.setItem("listUser", JSON.stringify(listUser));

    msgSucesso.setAttribute("style", "display: block;");
    msgSucesso.innerHTML = "<strong>Dados cadastrados com sucesso!</strong>";

    msgErro.setAttribute("style", "display: none;");
    msgErro.innerHTML = "";

    setTimeout(() => {
      window.location.href = "/login.html";
    }, 3000);
  } else {
    msgErro.setAttribute("style", "display: block;");
    msgErro.innerHTML =
      "<strong>Preencha todos os campos corretamente.</strong>";

    msgSucesso.setAttribute("style", "display: none;");
    msgSucesso.innerHTML = "";
  }
}

// Adiciona eventos de validação em tempo real
campos[0].addEventListener("input", emailValidate);
campos[1].addEventListener("input", senhaValidate);
campos[2].addEventListener("input", repeteSenhaValidate);
