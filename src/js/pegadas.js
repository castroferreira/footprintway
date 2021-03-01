const info = firebase.database().ref("users");

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
    //alert(snap.val());
    snapshot.forEach(function(snap){
    var nome = snap.child("nome").val();
    
        $("#info_nome").append(
        '<div class="text-align-center">' +
            ' <img class="rounded-circle" src="../assets/img/avatar_m2_perfil.png" alt="Generic placeholder image">' +
                '<h2 class="subtitulo">'+ nome +'</h2>' +
        '</div>' 
        );
        });
    });

    