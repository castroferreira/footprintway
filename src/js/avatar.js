/* const escolher = document.getElementById("escolher");
const avatar = document.getElementById("avatar");
const database = firebase.database(); */

$(document).ready(function (e) {
    $('.dropdown-content').toggleClass('active');

    $('.avatar-items').click(function () {
        $('.avatar-user').html($(this).html());
        $('.dropdown-content').toggleClass('active');
    });

    $('.avatar-user').click(function () {
        $('.dropdown-content').toggleClass('active');
    });

});

/*
escolher.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('users/' + avatar.value).set({
        avatar: avatar.value
    });
}); */