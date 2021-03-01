$(document).ready(function (e) {
    $('.dropdown-content').toggleClass('active');

    $('.carousel-items').click(function () {
        $('.avatar-user').html($(this).html());
        $('.dropdown-content').toggleClass('active');
    });

    $('.avatar-user').click(function () {
        $('.dropdown-content').toggleClass('active');
    });

});



/* function pickAvatar(){

    var avatar = document.getElementById("avatar-items");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value); ?????
    promise.catch(function() {
        e => alert(e.message);
        alert("Ocorreu um erro!")
    }
        );

        promise.then(function() {
            alert("Avatar escolhido com sucesso!")
            window.location.replace("../pages/autenticacao/public/registo.html")
        }
            );
} */

/* const avatar = document.getElementById("avatar-items");

const btn = document.getElementById("escolher");
const database = firebase.database().ref("avatar");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    database.child(avatar.value).set({
        avatar: avatar.value
    });
}); */