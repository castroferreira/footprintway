function validIframe() {
    var planetas = document.getElementById("planetas");
    var pegada_carbono = document.getElementById("pegada_carbono");
    var alimentacao = document.getElementById("alimentacao");
    var habitacao = document.getElementById("habitacao");
    var mobilidade = document.getElementById("mobilidade");
    var bens = document.getElementById("bens");
    var servicos = document.getElementById("servicos");
    var areas_construidas = document.getElementById("areas_construidas");
    var areas_cultivo = document.getElementById("areas_cultivo");
    var areas_pastagem = document.getElementById("areas_pastagem");
    var areas_pesca = document.getElementById("areas_pesca");
    var areas_florestais = document.getElementById("areas_florestais");

    if (!planetas.checkValidity()
        && !pegada_carbono.checkValidity()
        && !alimentacao.checkValidity()
        && !habitacao.checkValidity()
        && !mobilidade.checkValidity()
        && !bens.checkValidity()
        && !servicos.checkValidity()
        && !areas_construidas.checkValidity()
        && !areas_cultivo.checkValidity()
        && !areas_pastagem.checkValidity()
        && !areas_pesca.checkValidity()
        && !areas_florestais.checkValidity()
    ) {
        document.getElementById("demo").innerHTML = planetas.validationMessage;
        document.getElementById("demo").innerHTML = pegada_carbono.validationMessage;
        document.getElementById("demo").innerHTML = alimentacao.validationMessage;
        document.getElementById("demo").innerHTML = habitacao.validationMessage;
        document.getElementById("demo").innerHTML = mobilidade.validationMessage;
        document.getElementById("demo").innerHTML = bens.validationMessage;
        document.getElementById("demo").innerHTML = servicos.validationMessage;
        document.getElementById("demo").innerHTML = areas_construidas.validationMessage;
        document.getElementById("demo").innerHTML = areas_cultivo.validationMessage;
        document.getElementById("demo").innerHTML = areas_pastagem.validationMessage;
        document.getElementById("demo").innerHTML = areas_pesca.validationMessage;
        document.getElementById("demo").innerHTML = areas_florestais.validationMessage;
        alert("Tem de preencher os campos todos.")
    } else {
        alert("Valores inserido com sucesso");
        window.location.replace("../pages/pegada-ecologica.html")
    }
} 
