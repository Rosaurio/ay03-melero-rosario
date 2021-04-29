$(document).ready(function(){
    var boton1 = $("#boton");
    var boton2 = $("#otroboton");
    var sub = $("#subtitulo");
    var boton3 = $("#boton3");


boton1.click(function(){

    $("#nombre").hide();

});
sub.mouseenter(function(){
    sub.css("background-color","rgb(223, 174, 174)");


});
sub.mouseleave(function(){
    sub.css("background-color","white");

});
boton2.click(function(){
    $("#titulazo").text("Mis cosas favoritas");

});
boton3.click(function(){

    $("#nombre").show();

});
});