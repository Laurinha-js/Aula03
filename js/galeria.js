var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];


for (var i=1; i <=5; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick= abrir("+i+")>";

}

// document.getElementsByTagName("img")[0].onclick = function(){
// fullsize.innerHTML="<img src=img/foto1.jpg>"; 
// }

// document.getElementsByTagName("img")[1].onclick = function(){
//     fullsize.innerHTML="<img src=img/foto2.jpg>"; 
//     }


// A função abrir é chamada todas as vezes que uma foto de uma miniatura é clicada. 
//Quando a miniatura é clicada, ela dispara um evento chamado onclick e chama a função abrir passando por parametro(argumento)um
// número, que é a posição da foto.
// Assim, a função abrir recebe o número passado e armazena a variável p. Esta variável é usada para formar o nome da foto que será carregada 
// na div fullsize como vemos abaixo*/


function abrir(p){
        fullsize.innerHTML="<img src=img/foto"+p+".jpg>"; 
        }

