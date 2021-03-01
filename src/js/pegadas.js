//const database = firebase.database().ref("resultados");
//const datadicas = firebase.database().ref("Dicas do dia");

//var valueRef = firebase.database().ref('resultados');

database.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var pegadaecologica = snap.child("resultado_planetas").val();
        var pegadacarbono = snap.child("resultado_pegada_carbono").val();

        $("#dicauser").append(
            '<table> <tr><td class="peg_ec">' + "Pegada Ecológica" + '</td>' +
            '<td class="resultado_pe" id="pontuacao">' + pegadaecologica + '</td>' +
            '<tr><td class="peg_ec">' + "Pegada de Carbono" + '</td>' +
            '<td class="resultado_pe" id="pontuacao">' + pegadacarbono + '</td>' +
            '</tr> </table>'
        );
    });
});


