// $(() => {
//     $('.btn').click(function() {
//         $('#text').attr('class','float-right');
//     })
// });
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('#text').setAttribute('class', 'float-right');
    });
});