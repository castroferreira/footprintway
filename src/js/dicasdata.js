const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const publicar = document.getElementById("publicar");
const apagar = document.getElementById("apagar");
const titulo_dica = document.querySelector('#titulo_dica');
const descricao_dica = document.querySelector('#descricao_dica');
const database = firebase.database().ref("dicas");



publicar.addEventListener('click', (e) =>{
    e.preventDefault();
    database.child(titulo.value).set({
        dica_descricao: descricao.value
    });
});

database.on("child_added", snap => {
    alert(snap.val());
})

/*database.on("value", function(snapshot){
    snapshot.forEach(function(dica){
        document.querySelector('#titulo_dica').innerHTML += 
        '<h5>' +  titulo.value()  + '</h5>'
        
    });
});*/

apagar.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(titulo.value).remove().then(() => {
window.alert('Dica apagada!');
    })
.catch.error(error => {
    console.error(error);
});
});