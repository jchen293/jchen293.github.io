$(document).ready(function() {
  $(".navbar a, footer a[href='#myPage']").on(
    "click",
    function(event) {
      var hash = this.hash;
      scrollTop: $(hash).offset().top;
    },
    900,
    function() {
      window.location.hash = hash;
    }
  );
});
