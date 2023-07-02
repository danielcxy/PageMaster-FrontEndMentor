//-------------------DECLARAÇÃO E CRIAÇÃO DE VARIÁVEIS COM A DOM (DOCUMENT OBJECT MODEL)------------------------//
const form = document.querySelector('form')
const email = document.querySelector('input')
//-------------------------------------- FIM DA DECLARAÇÃO DA DOM ----------------------------------------------//

//CRIAÇÃO DE UMA FUNÇÃO QUE VALIDA O E-MAIL DO USUÁRIO//
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //validar e-mail
    if (email.value === "") {
        document.querySelector('input').style.borderColor = "red";
        document.getElementById('phrase3').style.display = 'block';  
        return
    }
    // se o e-mail estiver preenchido corretamente, faça:
    form.submit();
    
})