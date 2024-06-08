function logar(){
    var digEmail = document.getElementById("email")
    var digSenha = document.getElementById("senha")
    const underline = document.querySelectorAll(".underline")
    var msgErro = document.getElementById("msg_erro")
    var listUser = []

    var userValidado = {
        nome: "",
        email: "",
        senha: ""
    }

    listUser = JSON.parse(localStorage.getItem("listUser"))

    listUser.forEach((i) => {
        if(email.value == i.email && senha.value == i.senha){

            userValidado ={

                email: i.email,
                senha: i.senha

            }
    }})
    
    if(digEmail.value == userValidado.email && digSenha.value == userValidado.senha && digEmail.value.length != 0 && digSenha.value.length != 0){
        window.location.href = "../Tela_Catalogo/index.html"
        localStorage.setItem("usuarioLogado", JSON.stringify(userValidado))

    } else {

        underline[0].setAttribute("style", "background: #e63636;")
        underline[1].setAttribute("style", "background: #e63636;")
        digEmail.focus()

        msgErro.setAttribute("style", "display : block")
        msgErro.innerHTML = "Usuario e/ou senha incorretos."
    }
    

};

var usuarioLogado = localStorage.getItem("usuarioLogado")



