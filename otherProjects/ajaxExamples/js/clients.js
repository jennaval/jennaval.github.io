< table >
  < tr > < th > < /th> <th></th > < th > < /th> </tr >
  < tr >

  $(document).ready(function() {

    $("#getClients").on("click", function() {
        // alert("working");

        var url = "http://jennaval.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
        $.getJSON(url, function(data) {

          var html = "<table class='table table-hover table-striped'>" +
            "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
          // alert(data);
          // console.dir(data);
          $.each(data, function(index, item) {

        //    $("#data").append(item.name);
        //  })

          html += "<tr>" +
            "<td>" + item.name + "</td>" +
            "<td>" + item.email + "</td>" +
            "<td>" + item.company + "</td>" +
            "</tr>";
        })

        html += "</table>";
        $("#data").append(html;)
      }) // getJSON



  }) //click

});
