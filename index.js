//function main(){
//const formEl = document.querySelector(".form");
//formEl.addEventListener("submit", function(e){
//  e.preventDefault();
//});
////console.log(formEl);
//};
 function main () {
   function hSubmit (e){
     e.preventDefault();
     const data = new FormData(e.target);
     const valor = Object.fromEntries(data.entries());
    valor.tema = data.getAll("tema");
     console.log(valor);
   };
   const form = document.querySelector('form');
   form.addEventListener('submit', hSubmit); 
 }

main();