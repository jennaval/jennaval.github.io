// get the file (replace with your own url)
$.get("http://jennaval.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
    $(".container").fadeIn();

  })

})
