$(document).ready(function() {    
    $("#vertical-navbar").hover(
      function() {
        $(this).css("width", "200px"); // Expand the navbar
        $(".link-text").css("display", "inline");
        $(".home-button").css({"width":"200px", "height":"200px"});
        firstRun = false;
      },
      function() {
        $(this).css("width", "120px"); // Keep the expanded width when hovering out
        $(".link-text").css("display", "none");
        $(".home-button").css({"width":"140px", "height":"140px"});
      }
    );
  });