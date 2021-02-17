var titulo = document.getElementById("titulo");
var descricao = document.getElementById("descricao");
var publicar = document.getElementById("publicar");
var database = firebase.database();

function submitClick() {
    window.alert("working");

   database.child("Dicas").set("poupa água");
}