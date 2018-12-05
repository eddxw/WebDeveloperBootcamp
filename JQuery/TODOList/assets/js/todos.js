$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").on("keypress", function (e) {
    if (e.key === "Escape") {
        $(this).val("");
    }
});

$("input[type=text]").on("change", function () {
    var todoText = $(this).val();
    $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
    $(this).val("");
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle();
});