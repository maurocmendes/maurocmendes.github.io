
var story = 0; 
var form = document.getElementById('theHorrorGame');
var reset = document.getElementById('resetButton');
var answer = '';

































// var story_telling = {
//   "start": { // Inicio da Historia - Seleção de Personagem
//     "question": "Você está iniciando uma nova aventura, qual personagem você escolhe?",
//     "answers": {
//         "a": "Julia, a caçadora de vampiros 🧛‍♀️ ",
//         "b": "Carlos, o programador revoltado 🧑‍💻 ",
//         "c": "Cassandra, a detetive entediada 🕵️‍♀️ ",
//     }
//   },
//   //  Julia
//   "1_a": {
//     "question": "Você escolheu a Julia, uma destemida caçadora de vampiros. O que você vai fazer essa noite ... ",
//     "answers": {
//         "a": "Ir até o mercado, comprar pizza congelada e maratonar filmes de terror na Netflix.",
//         "b": "Caminhar até o Parque da Cidade para investigar boatos sobre vampiros na cidade.",
//         "c": "Pegar sua câmera e investigar uma casa mal assombrada."
//     }
//   },

//   "2_a": {
//     "question": "Julia voltou para casa com 2 pizzas, 1kg de alho e 1 pote de sorvete. O que fazer agora.",
//     "answers": {
//         "a": "Esquentar a 1 pizza e escolher algum filme de terror.",
//         "b": "Descascar alhos para fazer um colar de proteção contra vampiros.",
//         "c": "Assar a pizza de banana e colocar sorvete e leite condensado em cima."
        
//     }  
// },
//   "2_b": {
//     "question": "E agora 3.",
//     "answers": {
//         "a": "Ir até o mercado, comprar pizza congelada e maratonar filmes de terror na Netflix.",
//         "b": "Caminhar até o Parque da Cidade para investigar boatos sobre vampiros na cidade.",
//         "c": "Pegar sua câmera e investigar uma casa mal assombrada."
//     }
// },
//   "2_c": {
//     "question": "Pizza de Banana com sorvete e leite condensado",
//     "answers": {
//         "a": "Ir até o mercado, comprar pizza congelada e maratonar filmes de terror na Netflix.",
//         "b": "Caminhar até o Parque da Cidade para investigar boatos sobre vampiros na cidade.",
//         "c": "Pegar sua câmera e investigar uma casa mal assombrada."
//     }
// },

//   //  Carlos

//   "1_b": {
//     "question": "You go to the caves a run into a terrifying minotaur. What do you do?",
//     "answers": {
//       "d": "Run away screaming.",
//       "e": "Stand your ground and fight!",
//       "f": "Ask them if they want to be in your band.",
//     }
//   },
//   "2_d": {
//     "question": "The minotaur stares at you in confusion as you run all the way home. The End.",
//   },
//   "2_e": {
//     "question": "You defeat the minotaur and they turn into a cute puppy. The End.",
//   },
//   "2_f": {
//     "question": "The minotaur eagerly agrees, and together you start a funk revival band called The Groovy Hooves. The End.",
//     "end": "the end"
//   },

//   // Mountain Path

//   "1_c": {
//     "question": "You decide to take the mountain path and meet a magic goat. What do you do?",
//     "answers": {
//       "g": "Challenge the goat to a fiddle competition",
//       "h": "Teach the goat how to surf.",
//       "i": "Name the goat Gregory and become best friends.",
//     }
//   },

//   "2_g": {
//     "question": "You become the national fiddle playing champion. The End.",
//   },
//   "2_h": {
//     "question": "The goat becomes the best surfer in the universe. The End.",
//   },
//   "2_i": {
//     "question": "You and Gregory travel the world together. The End.",
//   },
  
// };

// // Continue link
// submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
//   answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
//   if(answer) {
//     story++;//increment or add 1 to
//     populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
//     console.log("Story time!"); // Console log to make sure things are working
//   }
// });

// // Reset button
// function resetForm(){
//     document.getElementById("theHorrorGame").reset();
// }

// // Generate answers from story
// function populateForm(story) {
//   var current_story = story_telling[story];//take values from story_telling story
//   var text = '';

//   for(var prop in current_story['answers']) {
//     if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
//       text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
//     }
//   }

//   form.querySelector('p').innerHTML = current_story.question;// Escreve as perguntas na tag P do HTML
//   form.querySelector('fieldset').innerHTML = text;// Escreve as respostas no campo delimitado
// }

// populateForm('start');// Determina o ponto de partida das perguntas
