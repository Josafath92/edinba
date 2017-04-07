
$( document ).ready(function() {
$( "#Capa_3" ).hover(
                function() {
                     // alert("entra");
                $("#circulo1").addClass( "hover" );
                $("#circulo2").addClass( "hover" );
                $("#circulo3").addClass( "hover" );
                $("#circulo4").addClass( "hover" );
                $("#circulo5").addClass( "hover" );
                $("#circulo6").addClass( "hover" );
                     
                }, function() {
                $("#circulo1").removeClass( "hover" );
                $("#circulo2").removeClass( "hover" );
                $("#circulo3").removeClass( "hover" );
                $("#circulo4").removeClass( "hover" );
                $("#circulo5").removeClass( "hover" );
                $("#circulo6").removeClass( "hover" );
                }
                );
});
