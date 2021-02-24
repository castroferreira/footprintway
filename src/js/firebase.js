const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const publicar = document.getElementById("publicar");
const titulo_dica = document.querySelector('#titulo_dica');
const descricao_dica = document.querySelector('#descricao_dica');
const database = firebase.database();

/*function renderDicas(doc){
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let descricao = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().any;
    descricao.textContent= doc.data().descricao;

    li.appendChild(titulo);
    li.appendChild(descricao);

    titulo_dica.appendChild(li);
    descricao_dica.appendChild(li);
}

//database.collection('Dicas').get().then((snapshot) => {
   // snapshot.docs.forEach(doc=> {
       // renderDicas(doc);
    //})
})*/


publicar.addEventListener('click', (e) => {
    e.preventDefault();

    database('/Dicas/').set({
            dica_titulo: titulo.value,
            dica_descricao: descricao.value
    
    });
    titulo.value= '';
    descricao.value= '';
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