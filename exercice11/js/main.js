document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('#square').style.backgroundColor = 'red';
    });
});