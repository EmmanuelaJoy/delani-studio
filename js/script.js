$(document).ready(function () {
    $(".design-clickable").click(function () {
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });

    $(".development-clickable").click(function () {
        $(".development-hidden").toggle();
        $(".development-showing").toggle();
    });

    $(".product-clickable").click(function () {
        $(".product-hidden").toggle();
        $(".product-showing").toggle();
    });

    $(".box img").hover(function () {
        Image.array.forEach(element => {
            $(".overlay").show();
        });
    }


    $("#contact").submit(function (event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#textArea").val();

        event.preventDefault();
        alert("Thank you " + name + " we have received your feedback!");
        $("form-row").trigger("reset");
    });
});