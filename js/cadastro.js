const campos = document.querySelectorAll(".input-required");
const underline = document.querySelectorAll(".underline");
const spans = document.querySelectorAll(".required");
const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

var emailPren = false;
var senhaPren = false;
var confSenhaPren = false;

var msgErro = document.getElementById("msg_erro");
var msgSucesso = document.getElementById("msg_sucesso");

function setError(i) {
  underline[i].style.background = "#e63636";
  spans[i].style.display = "block";
}

function validada(i) {
  underline[i].style.background = "#008000 ";
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
    emailPren = true;
  } else if (campos[0].value.length == 0) {
    resetError(0);
    emailPren = false;
  } else {
    setError(0);
    emailPren = false;
  }
  return emailPren;
}

function senhaValidate() {
  if (campos[1].value.length >= 8) {
    validada(1);
    senhaPren = true;
  } else if (campos[1].value.length == 0) {
    resetError(1);
    senhaPren = false;
  } else {
    setError(1);
    senhaPren = false;
  }
  return senhaPren;
}

function repeteSenhaValidate() {
  if (campos[2].value == campos[1].value) {
    validada(2);
    confSenhaPren = true;
  } else if (campos[2].value.length == 0) {
    resetError(2);
    confSenhaPren = false;
  } else {
    setError(2);
    confSenhaPren = false;
  }
  return confSenhaPren;
}

function cadastrar() {
  if (emailPren && senhaPren && confSenhaPren) {
    var listUser = JSON.parse(localStorage.getItem("listUser") || "[]");
    listUser.push({
      email: campos[0].value,
      senha: campos[1].value,
    });

    localStorage.setItem("listUser", JSON.stringify(listUser));

    msgSucesso.setAttribute("style", "display: Block;");
    msgSucesso.innerHTML = "<strong>Dados Cadastrados com sucesso!</strong>";

    msgErro.setAttribute("style", "display: none;");
    msgErro.innerHTML = "";

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 3000);
  } else {
    msgErro.setAttribute("style", "display: Block;");
    msgErro.innerHTML =
      "<strong>Preencha todos os dados corretamente.</strong>";

    msgSucesso.setAttribute("style", "display: none;");
    msgSucesso.innerHTML = "";
  }
}
