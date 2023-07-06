//-------------------DECLARAÇÃO E CRIAÇÃO DE VARIÁVEIS COM A DOM (DOCUMENT OBJECT MODEL)------------------------//
const form = document.querySelector('form')
const email = document.querySelector('input')
//-------------------------------------- FIM DA DECLARAÇÃO DA DOM ----------------------------------------------//

// CRIAÇÃO DE UMA FUNÇÃO QUE VALIDA O E-MAIL DO USUÁRIO  //
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
//------------------------------------------------------//
// CRIAÇÃO DE EVENTO QUE ENVIA O E-MAIL, CASO ESTE ESTEJA VÁLIDO //
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //USO DA FUNÇÃO (VALIDADEEMAIL) PARA VALIDAR O VALOR DO INPUT COMO EMAIL//
    if (validateEmail(email.value) != '') {
        form.submit()
    } else {
        document.querySelector('input').style.borderColor = "red";
        document.getElementById('phrase3').style.display = 'block';  
        return
    }
// CASO O INPUT CONTENHA OS CARACTERES REQUERIDOS PELA FUNÇÃO, O EVENTO ENCERRARÁ COM O SEU ENVIO.
// CASO NÃO, AS DIVS ALERTARAM EM VERMELHO PARA QUE SE REESCREVA O INPUT.VALUE NOVAMENTE.
})
//------------------------------------ FIM DA EXECUÇÃO DO PROGRAMA --------------------------------------//