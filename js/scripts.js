$(document).ready(function(){
  console.log("jquery is working")
  $("#program").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#A").val());
    var B = parseInt($("#B").val());
    var C = parseInt($("#C").val());
    var D = parseInt($("#D").val());
    var E = parseInt($("#E").val());
    var F = parseInt($("#F").val());
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
      if (A === B) {
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
