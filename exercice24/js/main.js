$(() => {
    $('.btn').click(function() {
        $('#bg').animate({
            marginLeft: '+=100px'
        }, 1500);
    });
});