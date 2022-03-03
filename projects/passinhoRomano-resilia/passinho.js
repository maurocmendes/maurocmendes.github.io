var code = document.getElementById('code');
var decode = document.getElementById('decode');
var botao = document.getElementById('botaoEnviar');
var cesar = document.getElementById('cesar');
var base64 = document.getElementById('base64');
var incremento = document.getElementById('incremento');
var resultado = document.querySelector('p');
var inc = parseInt(document.getElementById('increment').value);

function mostraInc() { 
    incremento.style.display = "block"; 
}

function escondeInc() {
    incremento.style.display = "none";
}


function mudaBotao () {
  if (decode.checked) {
      botao.innerText = "Decodificar!";
  } else if (code.checked) {
      botao.innerText = "Codificar!";
  }
}

cesar.addEventListener('change', mostraInc);
base64.addEventListener('change', escondeInc)


botao.addEventListener('click', function(event) {
    event.preventDefault();
    checaOpcao();
});

function codeCesar(msg) {
    msg = msg.split("");
       let indexAtual = msg.map((x) => x.charCodeAt());
                 let indexNovo = indexAtual.map((x) => x+inc);
                        let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
                                   return msgNova;
}

function decodeCesar(msg) {
    msg = msg.split("");
          let indexAtual = msg.map((x) => x.charCodeAt())
               let indexNovo = indexAtual.map((x) => x-inc);
                     let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
                            return msgNova;
}

function checaOpcao () {
    var msg = document.getElementById('mensagem').value;
    if (code.checked) {
        if (cesar.checked) {
                       resultado.innerText = codeCesar(msg);
        } else {
                     resultado.innerText = btoa(msg);
        } 
    } else if (decode.checked) {
        if (cesar.checked) {
                     resultado.innerText = decodeCesar(msg);
        } else {
                       resultado.innerText = atob(msg);
        } 
    } else {
        resultado.innerText = "Escolha uma operação";
    }
}
