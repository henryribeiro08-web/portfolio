
function enviar(){
let nome = document.getElementById("inome")
let email = document.getElementById("iemail")


    if(nome.value.trim().length === 0){     
        alert("Ops! O campo de Nome ficou em branco.")
        nome.focus()
        return false
    }else if(nome.value.trim().length < 3){
        alert("O campo Nome precisa ter no minimo 3 caracteres")
        nome.focus()
        return false
    }

    const emailvalido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(email.value.trim().length === 0){
        alert("Ops! O campo de Email ficou em branco.")
        email.focus()
        return false
    }else if(!emailvalido.test(email.value)){
        alert("Por favor, digite um e-mail válido (ex: seu_nome@dominio.com).");
        email.focus()
        return false
    }
    
    let mensagem = document.getElementById("imsg")

    if(mensagem.value.trim().length === 0){
        alert("O campo de mensagem precisa ser preenchido para proseguir")
        mensagem.focus()
        return false
    }else if(mensagem.value.trim().length < 10){
        alert("O campo Mensagem precisa ter o minimo 10 caracteres")
        mensagem.focus()
        return false
    }
    else{
        alert("Mensagem enviada com sucesso!")
    }
    return true
}
