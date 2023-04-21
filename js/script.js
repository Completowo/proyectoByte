$(document).ready(function(){
    $(".errorNom").hide();
    $(".errorEmail").hide();
    $(".errorAsun").hide();
    $(".errorMsg").hide();

    $("#enviar").click(function(){
        var nombre = "";
        nombre = $("#nombre").val();

        if (nombre.length == 0){
            $(".errorNom").show();
        }else{
            $(".errorNom").hide();
        }

    });

    $("#enviar").click(function(){
        var nombre = "";
        nombre = $("#email").val();

        if (nombre.length == 0){
            $(".errorEmail").show();
        }else{
            $(".errorEmail").hide();
        }

    });

    $("#enviar").click(function(){
        var nombre = "";
        nombre = $("#asunto").val();

        if (nombre.length == 0){
            $(".errorAsun").show();
        }else{
            $(".errorAsun").hide();
        }

    });

    $("#enviar").click(function(){
        var nombre = "";
        nombre = $("#mensaje").val();

        if (nombre.length == 0){
            $(".errorMsg").show();
        }else{
            $(".errorMsg").hide();
        }

    });


})
