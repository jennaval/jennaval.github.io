$(document).ready(function() {

  $("#getClients").on("click", function() {
      // alert("working");

      var url = "http://jennaval.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
      $.getJSON(url, function(data) {

          var html = "<table class='table table-hover table-bordered'>" +
            "<tr><th class='text-info'>Name</th><th class='text-success'>Email</th><th class='text-active'>Company</th><th class='text-warning'>Phone</th><th class='text-danger'>Address</th></tr>";
          // alert(data);
          // console.dir(data);
          $.each(data, function(index, item) {

            //    $("#data").append(item.name);
            //  })

            html += "<tr>" +
              "<td class='info'>" + item.name + "</td>" +
              "<td class='success'>" + item.email + "</td>" +
              "<td class='active'>" + item.company + "</td>" +
              "<td class='warning'>" + item.phone + "</td>" +
              "<td class='danger'>" + item.address + "</td>" +
              "</tr>";
          })

          html += "</table>";
          $("#data").append(html);

        }) // getJSON



    }) //click

})
