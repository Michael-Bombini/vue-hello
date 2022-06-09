/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const appVue = new Vue({
    el: "#app",
  
    // dati usati dall'applicazione
    //titolo h1 e image source ricavata con v-bind
    data: {
      titolo : "H1 Hello VUE",
      image : "https://picsum.photos/200/300",
    },
  
 
  });