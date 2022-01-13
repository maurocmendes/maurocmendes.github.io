var pergunta = "Escolha a opção 1, 2 ou 3";

      
function testar(){
    location.replace("../index.html");
}

      function restart() {
  location.replace("../index.html");
}

   
var pergunta = "Escolha a opção 1, 2 ou 3";
function resposta(){
var resposta = Number(prompt(pergunta));

while (!resposta){
   var resposta = Number(prompt(pergunta));
} 

if (resposta === 1){
    window.history.pushState("", "", "../carlos/indexcarlos_1a.html"); window.location.reload();
          }
else if (resposta === 2) {

    location.replace("../index.html");
}
else if (resposta === 3) {

    location.replace("../index.html");
}

}