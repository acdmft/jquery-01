$(() => {
    $('.btn').click(function() {
        $('#square').animate({
            right: 0,
            bottom: 0
        }, 'slow');
    });
});