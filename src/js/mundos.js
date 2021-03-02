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
            mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
                '<p class="bom_cam">' + "Ainda podes evoluir!" + '</p>'
        }
    });
});


/*     database.once('value', function (snapshot) {
        //alert(snap.val());
        snapshot.forEach(function (snap) {
            var nome = snap.child("dica_titulo").val();
            var legenda = snap.child("dica_descricao").val();

            $("#dicauser").append(
                '<div class="row"> <div class="col-sm-12"><div class="card mt-4" style="width: 18rem;">' +
                '<div class="card-body" id="cardbody">' +
                '<a href="#"><button class="apagar" id="apagar">' +
                '<img src="../assets/img/icons/apagar.png" height="30px">' +
                '</button></a><h5 class="card-title">' + nome + '</h5>' +
                '<p class="card-text" id="descricao_dica">' + legenda + '</p></div></div></div></div>'
            );
        });
    }); */