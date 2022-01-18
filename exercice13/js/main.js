// $(() => {
//     $('.btn').click(function() {
//         $('#text').css('font-size', '50px');
//     })
// });
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('#text').style.fontSize = '50px';
    });
});