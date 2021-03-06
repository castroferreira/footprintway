const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const publicar = document.getElementById("publicar");
const database = firebase.database().ref("dicas");
const datadicas = firebase.database().ref("Dicas do dia");

publicar.addEventListener('click', (e) => {
    e.preventDefault();
    database.child(titulo.value).set({
        dica_titulo: titulo.value,
        dica_descricao: descricao.value
    });
    window.alert("Dica publicada com sucesso!")
    document.location.reload(true);
});

database.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var nome = snap.child("dica_titulo").val();
        var legenda = snap.child("dica_descricao").val();

        $("#dicauser").append(
            '<div class="row"> <div class="col-sm-12"><div class="card mt-4" style="width: 18rem;">' +
            '<div class="card-body" id="cardbody">' +
            '<a href="#"><button class="apagar" id="apagar">' +
            '<img src="../assets/img/icons/apagar.png" height="30px">' +
            '</button></a><h5 class="card-title">' + nome + '</h5>' +
            '<p class="card-text" id="descricao_dica">' + legenda + '</p></div></div></div></div>'
        );
    });
});

datadicas.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var nome = snap.child("nome").val();
        var descricao = snap.child("descricao").val();

        $("#cardia").append(
            '<div class="row">' +
            '<div class="col-sm-12">' +
            '<div class="card border-success mb-3 mt-3" style="width: 18rem;">' +
            '<div class="card-body" id="cardbody">' +
            '</button></a><h5 class="card-title">' + nome + '</h5>' +
            '<p class="card-text" id="descricao_dica">' + descricao + '</p></div></div></div></div>'
        );
    });
});

$(document).ready(function () {
    $(document).on('click', '.apagar', function () {
        const deedRef = firebase.database().ref('/dicas');
        deedRef.limitToLast(1).once("value", (snapshot) => {
            snapshot.forEach((deedSnapshot) => {
                deedSnapshot.ref.remove();
            })
            document.location.reload(true);
        })
    });
});