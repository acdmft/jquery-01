document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('input').removeAttribute('disabled');
    });
});