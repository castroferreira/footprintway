const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const publicar = document.getElementById("publicar");

const database = firebase.database();

publicar.addEventListener('click', (e) => {
    e.preventDefault();

    database.ref('/Dicas/').set({
    
            dica_titulo: titulo.value,
            dica_descricao: descricao.value
    
    });
})

var ref = database.ref('Dicas');
ref.on('value', gotData, errData);

function gotData(data){
    console.log(data.val());
}

function errData(err){
    console.log('Error');
    console.log(err);
}