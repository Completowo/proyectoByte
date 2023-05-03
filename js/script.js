/**jquery validacion formulario web */
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

    $('#enviar').click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $(".errorEmail").show();
        }else{
            $(".errorEmail").hide();
        }

    });


    $("#enviar").click(function(){
        var asunto = "";
        asunto = $("#asunto").val();

        if (asunto.length == 0){
            $(".errorAsun").show();
        }else{
            $(".errorAsun").hide();
        }

    });

    $("#enviar").click(function(){
        var mensaje = "";
        mensaje = $("#mensaje").val();

        if (mensaje.length == 0){
            $(".errorMsg").show();
        }else{
            $(".errorMsg").hide();
        }

    });


})





