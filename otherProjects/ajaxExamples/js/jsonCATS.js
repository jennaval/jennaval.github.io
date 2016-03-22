$(document).ready(function() {

  // alert("J");
  // $.getJSON
  $.getJSON("jsonDatabase/jsonCATS.json", function(data) {

    console.dir(data);

    var html = "";
    $.each(data, function(index, item) {
        html += '<div class="col-md-4">' +
          // do some stuff
          '<div class="catName">' + item.name + '</div>' +
          '<div class="catType">' + item.type + '</div>' +
          '<div class="catGender">' + item.gender + '</div>' +
          '<img src=" ' + item.image + ' "/>' +
          '<div class="commentsContainer">' + item.comments + '</div>';

        html += '</div>';

      }) // each cat
    $("#catData").append(html);
  })

})

/*
//one per cat
<div class="col-md-4">
  <div class="catName"></div>
  <div class="catType"></div>
  <div class="catGender"></div>
  <img src=""/>
  <div class="commentsContainer">
    //one per comment
    <div class="renterName"></div>
    <div class="renterLocation"></div>
    <div class="renterStars">
    //5 stars, some full - some empty
  </div> //end starts
  </div> //end commentsContainer
</div> // end cat

*/
