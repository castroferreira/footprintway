$(document).ready(function (e) {
    $('.avatar-items').click(function () {
        $('#avatar-user').html($(this).html());
        $('.dropdown-content').toggleClass('active');
    });

    $('.avatar-user').click(function () {
        $('.dropdown-content').toggleClass('active');
    });

});