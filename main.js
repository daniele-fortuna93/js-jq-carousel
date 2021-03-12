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

  $(".nav .fas.fa-circle").click(
    function(){
      var images = $(".images img");
      var dots = $(".nav .fas.fa-circle");
      var indexImg = dots.index($(this));
      $(".nav").children().removeClass("active");
      $(this).addClass("active");
      images.removeClass("active");
      images.eq(indexImg).addClass("active");
    }
  );

  $(document).keydown(
    function (e) {
      if ( e.keyCode == 39) {
        imgSuccessiva();
      } else if ( e.keyCode == 37 ) {
        imgPrecedente();
      }
    }
  );
}
);

// FUNZIONI

// Funzione nextImg
function imgSuccessiva() {
  var images = $(".images img.active");
  var bluePoint = $(".nav i.active");
  bluePoint.removeClass("active");
  images.removeClass("active");
  if ( images.hasClass("last") == false) {
    images.next().addClass("active");
    bluePoint.next().addClass("active");
  } else {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
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
