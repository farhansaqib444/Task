$('body')

    .on('click', 'div.thirteen button.btn-search', function(event) {
        event.preventDefault();
        var $input = $('div.thirteen input');
        $input.focus();
        if ($input.val().length() > 0) {
            // submit form
        }
    });

$(".card-x").click(function(){
        $(".sign-in").addClass("x-card-active");
        $(".sign-up").addClass("y-card-inactive");
        $(".sign-up").removeClass("y-card-active");
        $(".sign-in").removeClass("x-card-inactive");
});

$(".card-y").click(function(){
        $(".sign-up").addClass("y-card-active");
        $(".sign-in").addClass("x-card-inactive");
        $(".sign-in").removeClass("x-card-active");
        $(".sign-up").removeClass("y-card-inactive");
});


