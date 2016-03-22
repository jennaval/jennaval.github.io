$(document).ready(function() {

  // alert("J");
  // $.getJSON
  $.getJSON("jsonDatabase/jsonCATS.json", function(data) {

    console.dir(data);

    var html = "";
    $.each(data, function(index, item) {
        html += '<div class="col-md-4">' +
          // do some stuff
          '<div class="catName"><small>Name: </small>' + item.name + '</div>' +
          '<div class="catType"><small>Type: </small>' + item.type + '</div>' +
          '<div class="catGender"><small>Gender: </small>' + item.gender + '</div>' +
          '<br>' +
          '<img class="catImage" src="' + item.image + '"/>' +
          //  '<img src=" ' + item.image + ' "/>' +
          '<div class="commentsContainer">';
        $.each(item.comments, function(ind, i) { // ind = index , i = item -- same as above
            html += '<div class="renterName">' + i.username + '</div>' +
              '<div class="renterLocation">' + i.comment + '</div>';
            '<div class="renterStars">';

      //      var numStars = Number(i.stars);

            for (var j = 1; j <= 5; j++) {
              if (j <= i.stars) {
                html += '<img src="images/full-star.png"/>';
              } else {
                html += '<img src="images/empty-star.png"/>';
              }
            }
      //      html += '</div>'; // end stars
          }) // each comment

        html += '</div>' + // commentsContainer
          '</div>'; // col-md-4

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
    <div class="renterComment"></div>
    <div class="renterStars">
    //5 stars, some full - some empty
  </div> //end starts
  </div> //end commentsContainer
</div> // end cat

*/
