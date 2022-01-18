$(() => {
    $('.btn').click(function() {
        $.ajax({
            url: "https://restcountries.com/v3.1/name/france",
            success: function(data, status, res) {
                // console.log(data[0].name.common, data[0].capital[0]);
                $('#country').html(data[0].name.common);
                $('#capital').html(data[0].capital[0]);
            }
        });
    });
});