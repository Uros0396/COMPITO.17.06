  // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.














// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

                       
const divToRemove = document.querySelector(".row.mb-2");
const link = document.querySelector(".stretched-link");

link.addEventListener("click", function() {
  divToRemove.remove()
})



  // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

 const array = document.getElementsByTagName("a");
 console.log(array);

 function serchAuthor(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === "Marco" && array[i] === "Iacopo" && array[i] === "Christian") {
      return newArray.push(array[i])
      
    }
  } console.log(newArray);
} 
 
 console.log(serchAuthor());