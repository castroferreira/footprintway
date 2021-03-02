var mundo = document.getElementById('mundo');
var pegadacarbono = snap.child("resultado_pegada_carbono").val();

window.onload = 
function mensagens() {
    if (pegadaecologica <= 1) {
        mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
        '<p class="bom_cam">' + "Continua assim!" + '</p>'

    } if (pegadaecologica > 1 && pegadaecologica <=2) {
        mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
        '<p class="bom_cam">' + "Estás num bom caminho!" + '</p>'
    } else {
        mundo.innerHTML = '<img src="../assets/img/mundo-feliz.png" class="img_mundo">' +
        '<p class="bom_cam">' + "Ainda podes evoluir!" + '</p>'
    }
        
};





