$(document).ready(function() {
  /*
  click - done
  focus
  blur
  change
  mouseenter & mouseleave

  $("#").on("", function(){
  });

  */
  //alert("yo!");

  //mouseenter & mouseleave events
  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("Order Now!");
    })
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Click Me!");
    });

  //focus & blur events
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>Input focus");
      $(this).css("background-color", /*"#F7F8E0"*/ "#E9F2F5");
    })
    /* ;
      $("#mySingleLineText") */
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
    $("#log").append("<br>Value of userOrder is: " + /*JSON.stringify(*/userOrder/*)*/);

    /*
            var myInput = $("#mySingleLineText").val();
            var myTextarea = $("#myTextArea").val();
            var mySelect = $("#mySelect").val();
            var myRadio = $("[name='gender']:checked").val();

            var myCheckValues = [];
            $("[name='vehicle']:checked").each(function() {
              myCheckValues.push($(this).val());
            });

            $("#log").append("<br>User clicked the button");

            $("#log").append("<br>Value of input is: " + myInput);
            $("#log").append("<br>Value of textarea is: " + myTextarea);
            $("#log").append("<br>Value of select is: " + mySelect);
            $("#log").append("<br>Value of radio is: " + myRadio);
            $("#log").append("<br>Value of value is: " + myCheckValues.join());
*/
  });

});
