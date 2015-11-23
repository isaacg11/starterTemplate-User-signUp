Stamplay.init('sdkusersignup'); //YOUR APP ID GOES HERE!

function signUp() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var registrationData = {
		displayName: name,
  		email : email,
  		password: password
	};

	var newUser = new Stamplay.User().Model;
	newUser.signup(registrationData).then(function(){
		alert('success!');
	});
}