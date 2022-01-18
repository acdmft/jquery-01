$(() => {
    $('.form-control').keyup(changeInputValidity);
});

function changeInputValidity () {
    let textInput = $('.form-control').val();
    console.log(textInput.length);
    if (textInput.length > 5) {
        $('.form-control').removeClass('is-invalid');
        $('.form-control').addClass('is-valid');
    } else {
        $('.form-control').removeClass('is-valid');
        $('.form-control').addClass('is-invalid');
    }
}