const username = document.getElementById("username");
const idade = document.getElementById("quantity");
const genero = document.getElementById("gender");
const curso = document.getElementById("curso");
const departamento = document.getElementById("departamento");
const dados = document.getElementById("dados");

const database = firebase.database();


dados.addEventListener('click', (e) =>{
    e.preventDefault();
    database.ref('users' + username.value).set({
       nome: username.value,
       idade_dados: idade.value,
       genero_dado: genero.value,
       curso_dados: curso.value,
       departamento_dado: departamento.value

    });
});
