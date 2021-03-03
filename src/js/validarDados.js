const username = document.getElementById("nome-utilizador");
const idade = document.getElementById("quantity");
const genero = document.getElementById("genero");
const curso = document.getElementById("curso");
const departamento = document.getElementById("departamento");
const dados = document.getElementById("dados");

const database = firebase.database();

dados.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('users/' + username.value).set({
        nome: username.value,
        idade_dados: idade.value,
        genero_dados: genero.value,
        curso_dados: curso.value,
        departamento_dados: departamento.value
    });
});

function validarDados() {

    if (!username.checkValidity()
        && !idade.checkValidity()
        && !genero.checkValidity()
        && !curso.checkValidity()
        && !departamento.checkValidity()
    ) {
        document.getElementById("demo").innerHTML = username.validationMessage;
        document.getElementById("demo").innerHTML = idade.validationMessage;
        document.getElementById("demo").innerHTML = genero.validationMessage;
        document.getElementById("demo").innerHTML = curso.validationMessage;
        document.getElementById("demo").innerHTML = departamento.validationMessage;
        alert("Tem de preencher os campos todos.")
    } else {
        alert("Dados inseridos com sucesso");
        window.location.replace("../pages/escolher-avatar.html")
    }
} 