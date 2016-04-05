// get the file (replace with your own url)
$.get("http://jennaval.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
    $(".container").fadeIn();


  })

})

/// test
/*
$(document).ready(function() {
    $('.nav').find("li").on("click", function() { // get all the nav li and click event

      $('.nav').find("li").removeClass("active"); // remove all active classes
      $(this).addClass("active"); // add active active to clicked li
    })
  })
*/
