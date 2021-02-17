(function()
{

    const config = {
        apiKey: "",
        authDomain:"",
        databaseURL:"",
        storageBucket:"",
    };
    firebase.initializeApp(config);

    //ir buscar elementos

    const nomeobjeto = document.getElementById('');

    //criar referencias

    const nomerefobjeto = firebase.database().ref().child('');

    //sincronizar as mudanças no objeto tempo real; o on vai buscar consoante a referencia colocada no child('object')
    //sempre que os dados mudarem na firebase vao mudar na app com o codigo em baixo
    //o evento utilizado a seguir ao on vai determinar o nivel de sincronização


    //sincronizar objetos
    //função de retorno (o evento determina quando o retorno é chamado);
    //o evento value retorna informações todas as vezes que houver alterações na base de dados
    //o snap é como um snapshot da base de dados
    //nomerefobjeto.on('value', snap => console.log(snap.val()));

    nomerefobjeto.on('value', snap => {
nomeobjeto.innerText = JSON.stringify(snap.val(), null, 3);
    });
    

}());