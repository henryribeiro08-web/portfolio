
function enviar(){
let nome = document.getElementById("inome")
let email = document.getElementById("iemail")

let nomeinvalido = document.getElementById("nomeERRO")
nomeinvalido.innerText = ""

    if(nome.value.trim().length === 0){     
        nomeinvalido.innerText = "Ops! O campo de Nome ficou em branco"
        nome.classList.add("campo-invalido");
        return false
    }
    
    else if(nome.value.trim().length < 3){
        nomeinvalido.innerText = "O campo Nome precisa ter no minimo 3 caracteres"
        nome.classList.add("campo-invalido");
        return false
    }

    const emailvalido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let emailinvalido = document.getElementById("emailERRO")
    emailinvalido.innerText = ""

    if(email.value.trim().length === 0){
        emailinvalido.innerText = "Ops! O campo de Email ficou em branco."
        email.classList.add("campo-invalido");
        return false
    }else if(!emailvalido.test(email.value)){
        emailinvalido.innerText = "Por favor, digite um e-mail válido (ex: seu_nome@dominio.com)."
        email.classList.add("campo-invalido");
        return false
    }
    
    let mensagem = document.getElementById("imsg")
    let msginvalida = document.getElementById("msgERRO")
    msginvalida.innerText = ""

    if(mensagem.value.trim().length === 0){
        msginvalida.innerText = "Ops! O campo de mensagem ficou em branco."
        mensagem.classList.add("campo-invalido");
        return false
    }else if(mensagem.value.trim().length < 10){
        msginvalida.innerText = "O campo Mensagem precisa ter o minimo 10 caracteres"
        mensagem.classList.add("campo-invalido");
        return false
    }
    else{
        alert("Mensagem enviada com sucesso!")
    }
    return true
}
