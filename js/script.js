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


    $("#submitBtn").click(function (event) {
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#textArea").val();
        if (name == '' || email == '' || message == '') {
            event.preventDefault();
            alert("Please fill in all the form details first");
        } else {
            $("#contactForm").trigger("reset");
            alert("Thank you " + name + "! " + "We have received your feedback and will get back to you shortly.");
        };
    });

});
