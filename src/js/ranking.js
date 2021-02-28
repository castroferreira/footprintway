const database = firebase.database().ref("users");
const resultados = firebase.database().ref("resultados");


database.once('value', function (snapshot) {
            //alert(snap.val());
            snapshot.forEach(function(snap){
            var nome = snap.child("nome").val();
            //var pe = snap.child("resultado_planetas").val();
        
                $("#ranking3").append(
                '<div class="row py-3 moved">' +
                    '<div class="col-4">' +
                        '<h2 class="">2º</h2>' +
                        '<img class="rounded-circle" src="../assets/img/avatar_m1.png" alt="Generic placeholder image" width="65" height="65">' +
                        '<h2 class="padding-left">'+ nome+'</h2>' +
                        //'<p class="padding-posicao6">'+ pe[i] +'</p>' +
                    '</div>' +
                '</div>' 
                );
                });
            });

            
