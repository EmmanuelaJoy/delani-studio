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

    $(".item").hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('.project').css('visibility', 'visible');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('.project').css('visibility', 'hidden');
    });

    $("#submitBtn").click(function (event) {
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#textArea").val();

        if (name == '' || email == '' || message == '') {
            event.preventDefault();
            alert("Please fill in all the form details first");
        } else {
            alert("Thank you " + name + "! " + "We have received your feedback. One of our agents will get back to you shortly.");
        };
    });

});
