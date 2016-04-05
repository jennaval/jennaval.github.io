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
                '<div class="panel-heading">Cupcake Reviews! </div>';
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
        $.get("partials/order2.html", function(data) { // link order page
          $("#pageContent").html(data);

          // ORDER PAGE 2

          //activate the datepicker
          $('#startRentDate, #endRentDate').datepicker({


          });

          /*
                    // BOOTSTRAP.JS FOR EVENTS ON ORDER PAGE
                    $("#myButton").on("mouseenter", function() {
                        $("#log").append("<br>Button mouseenter");
                        $(this).text("Order Now!");
                      })
                      .on("mouseleave", function() {
                        $("#log").append("<br>Button mouseleave");
                        $(this).text("Submit Order");
                      });

                    //focus & blur events
                    $("#mySingleLineText").on("focus", function() {
                        $("#log").append("<br>Input focus");
                        $(this).css("background-color", "#E9F2F5");
                      })
                      // blur event
                      .on("blur", function() {
                        $("#log").append("<br>Input blur");
                        $(this).css("background-color", "#FFF");
                      });

                    //change event
                    $("#mySelect").on("change", function() {
                      $("#log").append("<br>Select change");
                      var val = $(this).val();

                      $("#mySelectMessage").html(val + " is a nice selection!");

                    });

                    // FUNCTIONS
                    $("#myButton").click(function() {

                      $("#log").append("<br>User clicked the button");

                      var userOrder = {};

                      userOrder.myInput = $("#mySingleLineText").val();
                      userOrder.myTextArea = $("#myTextArea").val();
                      userOrder.mySelect = $("#mySelect").val();
                      userOrder.myRadio = $("[name='gender']:checked").val();
                      userOrder.myCheckValues = [];

                      $("[name='vehicle']:checked").each(function() {
                        myCheckValues.push($(this).val());
                      });

                      $("#log").append("<br>Value of input is: " + userOrder.myInput);
                      $("#log").append("<br>Value of textarea is: " + userOrder.myTextarea);
                      $("#log").append("<br>Value of select is: " + userOrder.mySelect);
                      $("#log").append("<br>Value of radio is: " + userOrder.myRadio);
                      $("#log").append("<br>Value of value is: " + userOrder.myCheckValues.join());
                      $("#log").append("<br>Value of userOrder is: " + userOrder );
                    });

                    */
        })

      }
      $("pageContent").fadeIn()
    }

    // begin the parogram, get the homepage
    getPartial("homePage");

  }) // closes document.ready
