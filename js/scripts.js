$(document).ready(function(){
  $("#program").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#A").val());
    var B =  parseInt($("#B").val());
    var C = parseInt($("#C").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    console.log("hi");

    function result() {
      if (operator === "A") {
        return ("Python")
      };
    };




    $("#output").text(result);
    console.log("here");
