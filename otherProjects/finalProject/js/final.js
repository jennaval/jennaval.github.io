// alert("yo");

// NAV SELECTION
$(document).ready(function() {
    $('.nav').find("li").on("click", function() { // get all the nav li and click event

        $('.nav').find("li").removeClass("active"); // remove all active classes
        $(this).addClass("active"); // add active active to clicked li

        var page = $(this).attr("id"); // alert to check if id attributes work
        getPartial(page); // getPartial function below -->

      }) // closes "click" function

    function getPartial(partial) { // from above
      // alert(partial);
      if (partial == "homePage") { // ajax get home.html
        $.get("partials/home.html", function(data) {
          $("#pageContent").html(data);
          $('.carousel').carousel();
        })
      } else if (partial == "browsePage") { // ajax browse.html
        // alert("2");
        $.getJSON("jsonDatabase/final.json", function(data) {

          console.dir(data);
          var html = "";

          $.each(data, function(index, item) {
              html += '<div class="col-md-4">' +
                '<div class = "name" >' + item.name + '</div>' +
                '<div class = "flavour" >' + item.flavour + '</div>' +
                '<div class = "desc" >' + item.desc + '</div>' +
                '<div class = "price" >' + item.price + '</div>' +
                '<img class="cupcakeImg" src="' + item.image + '"/>' +
                // '<div class="commentsContainer">';

                '<div class="panel panel-default">' +
                '<div class="panel-heading">Cupcake Reviews: </div>';
              $.each(item.comments, function(ind, i) {
                  html += '<div class="panel-body">' +
                    '<div class ="buyerName">' + i.username + '</div>' +
                    '<div class ="buyerComment">' + i.comment + '</div>' +
                    '<div class="renderStars">';

                  for (var j = 1; j <= 5; j++) {

                    if (j <= i.stars) {
                      html += '<img src="images/full-star.png"/>';
                    } else {
                      html += '<img src="images/empty-star.png"/>';
                    }

                  } // closes loop

                  html +=
                    '</div>' + //end stars
                    '</div>'; //closes panel body

                }) //closes each comment

              html += '</div>' + // comments container
                '</div>' + //panel
                '</div>'; //col-md-4

            }) //EACH

          $("#pageContent").html(html);
        })

      } else if (partial == "orderPage") { // ajax order.html
        $.get("partials/order.html", function(data) { // link order page
            $("#pageContent").html(data);

            // ORDER PAGE 2

            //activate the datepicker
            $('#devDate, #endRentDate').datepicker({});

            $("#submitButton").on("click", function() {
                //alert("hey"); // add error class to div container - red border
                $("input, select").filter(function() {
                  return !this.value;
                }).closest("div").addClass("has-error");

                //remove error class for non empty ones - red border
                $("input, select").filter(function() {
                  return this.value;
                }).closest("div").removeClass("has-error");

                var errors = $(".has-error");
                if (errors.length < 1) {
                  sendConfirmation(); //alert("no errors");
                }
              }) // click

            $("#submitButton").on("mouseenter", function() {
                $("#log").append("<br>Button mouseenter");
                $(this).text("Order Now!");
              })
              .on("mouseleave", function() {
                $(this).text("Place Order");
              });

            $("#quantity, #name, #cardNumber, #securityCode, #expirymonth, #expiryYear, #address1, #zip, #state, #country").on("focus", function() {
                $("#log").append("<br>Input focus");
                $(this).css("background-color", "#F2EEED");
              })
              // blur event
              .on("blur", function() {
                $("#log").append("<br>Input blur");
                $(this).css("background-color", "#FFF");
              });
            //change event
            $("#cakeSelect").on("change", function() {
              $("#log").append("<br>Select change");
              var val = $(this).val();

              $("#mySelectMessage").html(val + " is a nice selection!");

            });

          }) // get

      }
      $("pageContent").fadeIn();
    }

    function sendConfirmation() {
      var order = {};
      var formData = $("input, select");
      formData.each(function() {
        var id = $(this).attr("id");
        order[id] = $(this).val();
      })
      alert("Sending to database " + JSON.stringify(order)); // alert box to inform buyer
      $("#successMsg").html("<img id='cc' src='images/icon.png'><br>" + // cupcake icon
      "Order received...<br>" + // msg appears below
      "Thank you, " + order.name +
      "! " + "<br>" +
        order.quantity +
        " ` " +
        order.cakeSelect + " cupcakes will be waiting for you on " +
        order.devDate +
      "<br><br>" );
    } // sendConfirmation


    // begin the parogram, get the homepage
    getPartial("homePage");

  }) // closes document.ready
