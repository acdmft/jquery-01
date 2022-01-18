$(() => {
    $('.btn').click(function() {
        let country = $('.form-control').val();
        let url = `https://restcountries.com/v3.1/name/${country}`
        $.ajax({
            url: url,
            success: function(data, status, res) {
                // console.log(data[0].name.common, data[0].capital[0]);
                $('#country').html(data[0].name.common);
                $('#capital').html(data[0].capital[0]);
            },
            error: function(err) {
                let errorMsg = `
                    <br><br><p style='color: red'>
                        status: ${err.status}, message: ${err.statusText}
                        </p>`;
                $('#exercise').append(errorMsg);
            }
        });
    });
});