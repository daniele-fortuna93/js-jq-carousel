$(function() {

  $(".next").click(
    function(){
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
  );
  $(".prev").click(
    function(){
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
  );
}
);
