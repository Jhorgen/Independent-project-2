$(document).ready(function(){
  console.log("jquery is working")
  $("#program").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#A").val());
    var B =  parseInt($("#B").val());
    var C = parseInt($("#C").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    console.log("hi");

    function result() {
      if (operator = "male") {
        console.log("selected A")
        return ("Python")
      } else {
        return ("nada")
      }
    }

  $("#output").text(result);
    console.log("here");

})
});
