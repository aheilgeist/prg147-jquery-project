$( function() {
    "use strict";
    $( "#hat" ).draggable();
} );


$(document).ready(function(){
    "use strict";

    $('#snowflake2').click(function() {
        $(this).fadeOut("slow");
    });

    $("#snowflake3").click(function(){
        $(this).effect('explode');
    });

    $("#snowflake4").click(function(){
        $(this).effect('slide');
    });

    $("#snowflake1").click(function(){
        $(this).animate({top:'+=550px'}, 5000);
    });

    $("#mittenleft").click(function(){
        $(this).animate({top:'+=250px'}, 5000);
    });
    $("#mittenright").click(function(){
        $(this).hide("slow");
    });

    $("#2reindeer").click(function(){
        $(this).effect('bounce', {times:'10'}, 500);
            $(this).animate({
                left: "-=300px",
                opacity: "0"},
            "3000");
    });

});