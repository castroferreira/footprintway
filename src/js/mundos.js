const mundos = firebase.database().ref("resultados/");

mundos.once('value', function (snapshot) {
    snapshot.forEach(function (snap) {
        var mundo = document.getElementById('mundo');
        var pegadaecologica = snap.child("resultado_planetas").val();

        if (pegadaecologica <= 1) {
            mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
                '<p class="bom_cam">' + "Continua assim!" + '</p>'

        } else if (pegadaecologica > 1 && pegadaecologica <= 2) {
            mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
                '<p class="bom_cam">' + "Estás num bom caminho!" + '</p>'
        } else {
            mundo.innerHTML = '<img src="../assets/img/mundo-triste.png" class="img_mundo">' +
                '<p class="bom_cam">' + "Ainda podes evoluir!" + '</p>'
        }
    });
});