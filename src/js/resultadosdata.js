const planetas = document.getElementById("planetas");
const pegada_carbono = document.getElementById("pegada_carbono");
const alimentacao = document.getElementById("alimentacao");
const quantidade = document.getElementById("quantity");
const mobilidade = document.getElementById("mobilidade");
const bens = document.getElementById("bens");
const servicos = document.getElementById("servicos");
const areas_construidas = document.getElementById("areas_construidas");
const areas_cultivo = document.getElementById("areas_cultivo");
const areas_pastagem = document.getElementById("areas_pastagem");
const areas_pesca = document.getElementById("areas_pesca");
const areas_florestais = document.getElementById("areas_florestais");

const btn = document.getElementById("btn");
const database = firebase.database().ref("resultados");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    database.child(pegada_carbono.value).set({
        resultado_planetas: planetas.value,
        resultado_pegada_carbono: pegada_carbono.value,
        resultado_alimentacao: alimentacao.value,
        resultado_quantidade: quantity.value,
        resultado_mobilidade: mobilidade.value,
        resultado_bens: bens.value,
        resultado_servicos: servicos.value,
        resultado_areas_construidas: areas_construidas.value,
        resultado_areas_cultivo: areas_cultivo.value,
        resultado_areas_pastagem: areas_pastagem.value,
        resultado_areas_pesca: areas_pesca.value,
        resultado_areas_florestais: areas_florestais.value
    });
});

// function writeNewPost(uid, planetas, pegada_carbono, alimentacao, quantidade, mobilidade, bens, servicos, areas_construidas, areas_cultivo, areas_pastagem, areas_pesca, areas_florestais) {
//     var postData = {
//         uid: uid,
//         planetas: planetas,
//         pegada_carbono: pegada_carbono,
//         alimentacao: alimentacao,
//         quantidade: quantidade,
//         mobilidade: mobilidade,
//         bens: bens,
//         servicos: servicos,
//         areas_construidas: areas_construidas,
//         areas_cultivo: areas_cultivo,
//         areas_pastagem: areas_pastagem,
//         areas_pesca: areas_pesca,
//         areas_florestais: areas_florestais
//     };

//     var novo = firebase.database().ref().child('resultados').push();
//     var updates = {};
//     updates['/resultados/' + novo] = postData;
//     updates['/user-resultados/' + uid + '/' + novo] = postData;

//     return firebase.database().ref().update(updates);
// }