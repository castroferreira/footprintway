const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const publicar = document.getElementById("publicar");
const apagar = document.getElementById("apagar");
const database = firebase.database().ref("dicas");



publicar.addEventListener('click', (e) =>{
    e.preventDefault();
    database.child(titulo.value).set({
        dica_titulo: titulo.value,
        dica_descricao: descricao.value
    });
});

database.on("child_added", snap => {
    //alert(snap.val());
    var nome = snap.child("dica_titulo").val();
    var legenda = snap.child("dica_descricao").val();

    $("#cardbody").append('<a href="#">'+'<button class="apagar" id="'+ apagar +'">'+
    '<img src="../assets/img/icons/apagar.png" height="30px">'+'</button>'+'</a>'+
    '<h5 class="card-title">' + nome + '</h5>'+
    '<p class="card-text" id="descricao_dica">'+ legenda +'</p>');

;})


apagar.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(dica_titulo).remove().then(() => {
window.alert('Dica apagada!');
    })
.catch.error(error => {
    console.error(error);
});
});