const info = firebase.database().ref("users/");

database.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var pegadaecologica = snap.child("resultado_planetas").val();
        var pegadacarbono = snap.child("resultado_pegada_carbono").val();

        $("#pegs").append(
            '<table> <tr><td class="peg_ec">' + "Pegada Ecológica" + '</td>' +
            '<td class="resultado_pe" id="pontuacao">' + pegadaecologica + " pe" + '</td>' +
            '<tr><td class="peg_ec">' + "Pegada de Carbono" + '</td>' +
            '<td class="resultado_pe" id="pontuacao">' + pegadacarbono + " pe" + '</td>' +
            '</tr> </table>'
        );
    });
});


info.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var nome = snap.child("nome").val();
        var idade_dados = snap.child("idade_dados").val();
        var genero_dado = snap.child("genero_dado").val();
        var curso_dados = snap.child("curso_dados").val();
        var departamento_dado = snap.child("departamento_dado").val();

        $("#info_nome").append(
            '<div class="text-align-center">' +
            ' <img class="rounded-circle" src="../assets/img/avatar_m2_perfil.png" alt="Generic placeholder image">' +
            '<h2 class="subtitulo">' + nome + '</h2>' +
            '</div>'
        );

        $("#table").append(
            '<tbody>' +
            '<tr> ' +
            '<th scope="row">Idade</th>' +
            '<td>' + idade_dados + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row">Género</th>' +
            '<td>' + genero_dado + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row">Curso</th>' +
            '<td>' + curso_dados + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row">Departamento</th>' +
            '<td>' + departamento_dado + '</td>' +
            '</tr>' +
            '</tbody>'
        );
    });
});