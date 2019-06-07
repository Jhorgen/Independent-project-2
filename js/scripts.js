$(document).ready(function(){
  console.log("jquery is working")
  $("#program").submit(function(event) {
    event.preventDefault();
    var operator = $("input:checkbox[name=operator]:checked").val();
    var A = $("#ses").val();
    var B = parseInt($("#ses").val());
    var C = parseInt($("#ses").val());
    var D = parseInt($("#ses").val());
    var E = parseInt($("#ses").val());
    var F = parseInt($("#ses").val());
    var G = parseInt($("#G").val());
    var H = parseInt($("#H").val());
    var I = parseInt($("#I").val());
    var J = parseInt($("#J").val());
    var K = parseInt($("#K").val());
    var L = parseInt($("#L").val());
    var result;
    console.log("hi");

    function result() {
      if (ses === A) {
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
