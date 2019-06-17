$(document).ready(function() {
  console.log("jquery is working")
  $("#program").submit(function(event) {
    event.preventDefault();

    var array = [];
    $("input:checkbox[name=operator]:checked").each(function(){
    console.log($(this).val());
    var inputarray = $(this).val();
    array.push(inputarray);

    if (array.includes("A") && array.includes("D") && array.includes("G") && array.includes("L") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("F") && array.includes("I") && array.includes("K") && array.includes("N")) {
      $("#cPlus").show();
      $("#program").hide();


    } else if (array.includes("C") && array.includes("E") && array.includes("H") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("F") && array.includes("H") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("E") && array.includes("I") && array.includes("L") && array.includes("n")) {
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("G") && array.includes("L") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("D") && array.includes("H") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("C") && array.includes("D") && array.includes("G") && array.includes("K") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("C") && array.includes("F") && array.includes("G") && array.includes("K") && array.includes("M")) {
      $("#swift").show();
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("E") && array.includes("I") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("C") && array.includes("E") && array.includes("G") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("F") && array.includes("G") && array.includes("J") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("H") && array.includes("K") && array.includes("N")) {
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("I") && array.includes("J") && array.includes("N")) {
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("C") && array.includes("D") && array.includes("G") && array.includes("K") && array.includes("M")) {
      $("#swift").show();
      $("#javaScript").show();

    } else if (array.includes("A") && array.includes("F") && array.includes("H") && array.includes("K") && array.includes("N")) {
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("E") && array.includes("H") && array.includes("K") && array.includes("N")) {
      $("#cPlus").show();
      $("#program").hide();
      $("all").hide();

    } else if (array.includes("B") && array.includes("F") && array.includes("G") && array.includes("K") && array.includes("M")) {
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("E") && array.includes("I") && array.includes("J ") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("C") && array.includes("D") && array.includes("G") && array.includes("L") && array.includes("M")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("D") && array.includes("I") && array.includes("J") && array.includes("N")) {
      $("#javaScript").show();
      $("#cPlus").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("F") && array.includes("G") && array.includes("J") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("F") && array.includes("G") && array.includes("K") && array.includes("O")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("H") && array.includes("L") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("G") && array.includes("L") && array.includes("N")) {
      $("#javaScript").show();
      $("#program").hide();

    } else if (array.includes("B") && array.includes("D") && array.includes("G") && array.includes("J") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

    } else if (array.includes("A") && array.includes("F") && array.includes("G") && array.includes("K") && array.includes("M")) {
      $("#swift").show();
      $("#program").hide();

     } 
      // $("#all").show();
      // $("#program").hide();



    // } else if (array.includes("1") && array.includes("4")) {
    //   $("#chicken").show();
    // } else if (array.includes("2") && array.includes ("3")) {
    //   $("#cliff").show();
    // } else if (array.includes("2") && array.includes("4"))    {
    //   $("#beach").show();
    // }


  });
});
});
