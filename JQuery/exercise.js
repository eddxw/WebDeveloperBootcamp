$(document).ready(function () {
    $("div").css("background", "purple");
    $("div.highlight").css("width", "200px");
    $("#third").css("border", "2px solid orange");
    $("div:nth-of-type(1)").css("color", "pink");

    var nameInput = $("input").on("change", function(){
        $("ul").append(`<li>${$(this).val()}</li>`);
        $(this).val("");
    });
    $('li').on("mouseenter", function(){
        $(this).css("color", "purple")
        $(this).fadeToggle("slow");
    });

});