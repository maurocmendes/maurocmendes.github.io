var pergunta = "Escolha a opção 1, 2 ou 3";

      
      function restart() {
  location.replace("../index.html")
}
   
var pergunta = "Escolha a opção 1, 2 ou 3";
function resposta(){
var resposta = Number(prompt(pergunta));

while (!resposta){
   var resposta = Number(prompt(pergunta));
} 

if (resposta === 1){
 alert("Você passou para a próxima fase");
 window.location.replace("indexcarlos_1a.html"); 
          }
else if (resposta === 2) {
 alert("Você passou para a próxima fase");
 window.location.replace("/indexcarlos_1b.html"); 
}
else if (resposta === 3) {
 alert("Você passou para a próxima fase");
     location.href = "./indexcarlos_1c.html" 
}

}