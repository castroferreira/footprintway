function signUp(){
		
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(function() {
		e => alert(e.message);
		alert("Houve um erro! Volte a inserir o email ou a password.")
	}
		);

		promise.then(function() {
			alert("Registo efetuado com sucesso!")
			window.location.replace("../../dados-utilizador.html")
		}
			);
	//alert("Signed Up");
}


function signIn(){
	
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(function() {
		e => alert(e.message);
		alert("Houve um erro! Volte a inserir o email ou a password.")
	}
		);

		promise.then(function() {
			alert("Login efetuado com sucesso!")
			window.location.replace("../../ranking.html")
		}
			);
	//alert("Signed In " + email.value);
}

