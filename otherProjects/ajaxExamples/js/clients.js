$(document).ready(function(){

$("#getClients").on("click", function() {
  // alert("working");

  var url = "http://jennaval.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
  $.getJSON(url, function(data) {

    // alert(data);
    // console.dir(data);
    $.each(data, function(index, item){

      $("#data").append(item.name);
    })

  }) // getJSON



}) //click

});
