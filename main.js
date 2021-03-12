$(function() {

  $(".next").click(
    function() {
      imgSuccessiva();
    }
  );
  $(".prev").click(
    function(){
      imgPrecedente();
    }
  );

  $(".nav .fas.fa-circle").click( // al click del pallino compare l'img corrispondente
    function(){
      var images = $(".images img"); //  variabile che si riferisce a tutte le img dentro un contenitore con classe images
      var dots = $(".nav .fas.fa-circle"); //  variabile che fa riferimento ai pallini nel bullet
      var indexImg = dots.index($(this)); // variabile con valore l'indice del pallino cliccato
      $(".nav").children().removeClass("active"); // rimuovo la classe active a tutti i pallini
      $(this).addClass("active"); // assegno la classe active al pallino cliccato
      images.removeClass("active"); // rimuovo la classe active a tutte le img
      images.eq(indexImg).addClass("active"); // assegno la classe active al'img corrispondente
    }
  );

  $(document).keydown( // evento alla pressione di un tasto della tastiera
    function (e) {
      if ( e.keyCode == 39) { // controllo se il tasto è la freccetta destra
        imgSuccessiva();
      } else if ( e.keyCode == 37 ) { // controllo se il tasto è la freccetta sinistra
        imgPrecedente();
      }
    }
  );
}
);

// FUNZIONI

// Funzione nextImg
function imgSuccessiva() {
  var images = $(".images img.active"); // assegno l'immagine con classe active a una variabile
  var bluePoint = $(".nav i.active"); // assegno a una variabile il pallino colorato
  bluePoint.removeClass("active"); // al click rimuovo la classe active
  images.removeClass("active"); // al click rimuovo la classe active
  if ( images.hasClass("last") == false) { // controllo se è presente la classe last
    images.next().addClass("active");  // assegno classe active all'elemento successivo
    bluePoint.next().addClass("active"); // assegno classe active all'elemento successivo
  } else {
    $(".images img.first").addClass("active"); // assegno classe active all'elemento con classe first
    $(".nav i.first").addClass("active"); // assegno classe active all'elemento con classe first
  }
}

function imgPrecedente() {
  var images = $(".images img.active");
  var bluePoint = $(".nav i.active");
  bluePoint.removeClass("active");
  images.removeClass("active");
  if ( images.hasClass("first") == false) {
    images.prev().addClass("active");
    bluePoint.prev().addClass("active");
  } else {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  }
}
