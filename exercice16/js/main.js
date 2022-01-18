document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('#text')
        .insertAdjacentHTML('afterbegin','<em>Konexio!</em');
    });
});