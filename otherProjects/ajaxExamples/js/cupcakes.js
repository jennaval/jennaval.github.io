$(document).ready(function () {


        $.getJSON("jsonDatabase/cupcakes.json", function (data) {

                console.dir(data);
                var html = "";


                $.each(data, function (index, item) {
                        html += '<div class="col-md-4">' +
                            '<div class = "name" >' + item.name + '</div>' +
                            '<div class = "flavour" >' + item.flavour + '</div>' +
                            '<div class = "desc" >' + item.desc + '</div>' +
                            '<div class = "price" >' + item.price + '</div>' +
                            '<img class="cupcakeImg" src="' + item.image + '"/>' +
                            // '<div class="commentsContainer">';

                            '<div class="panel panel-default">' +
                            '<div class="panel-heading">Cupcake Reviews! </div>';
                        $.each(item.comments, function (ind, i) {
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

                $("#cupcakeData").append(html);

            }) //getJSON

    }) //FUNCTIONS

/*
<div class ="col-md-4 icecream">
<div class ="icecreamName">
<div class ="icecreamType">
<div class ="icecream">
<img src"#"/>
<div class ="col-md-4">
<div class ="buyerName">
<div class ="buyerType">
<div class ="icecreamStars">
</div>
*/
