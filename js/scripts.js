$(document).ready(function(){
  console.log("jquery is working")
  $("#program").submit(function(event) {
    event.preventDefault();

    var A = parseInt($("#test").val());
    var B = parseInt($("#test").val());
    var C = parseInt($("#test").val());
    var D = parseInt($("#test").val());
    var E = parseInt($("#test").val());
    var F = parseInt($("#test").val());
    var G = parseInt($("#G").val());
    var H = parseInt($("#H").val());
    var I = parseInt($("#I").val());
    var J = parseInt($("#J").val());
    var K = parseInt($("#K").val());
    var L = parseInt($("#L").val());
    var operator = $("input:checkbox[name=operator]:checked").val();
    // var result;
    console.log("hi");

    function result() {
      if (operator = ) {
        console.log("selected A")
        return ("Pytho")
      } else {
        return ("nada")

}
}

  $("#output").text(result);
    console.log("here");

  })
});
