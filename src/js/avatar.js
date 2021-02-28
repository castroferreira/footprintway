$(document).ready(function (e) {
    $('.dropdown-content').toggleClass('active');
    
    $('.avatar-items').click(function() {
      $('.avatar-user').html($(this).html());
      $('.dropdown-content').toggleClass('active');
    });
    
    $('.avatar-user').click(function() {
      $('.dropdown-content').toggleClass('active');                   
    });
    
  });

  

  

/* function pickAvatar(){
		
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(function() {
		e => alert(e.message);
		alert("Ocorreu um erro!")
	}
		);

		promise.then(function() {
			alert("Avatar escolhido com sucesso!")
			window.location.replace("../pages/autenticacao/public/registo.html")
		}
			);
} */