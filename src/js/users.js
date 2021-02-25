const username = document.getElementById("username");
const idade = document.getElementById("quantity");
const genero = document.getElementById("gender");
const curso = document.getElementById("curso");
const departamento = document.getElementById("departamento");
const dados = document.getElementById("dados");
const database = firebase.database().ref("users");

dados.addEventListener('click', (e) => {
    e.preventDefault();
    database.child(username.value).set({
        username_dado: username.value,
        idade_dado: idade.value,
        genero_dado: genero.value,
        curso_dado: curso.value,
        departamento_dado: departamento.value
    });
});
