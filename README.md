# starterTemplate-User-signUp
a Javascript starter template for signing up users with the Stamplay SDK

**CLONING: When cloning this repo, you must initialize your app first to make it work.**

 1) **Initialize the front-end of your app with Stamplay**
 <br>
- Go to your command line and enter **stamplay init**
- When prompted, enter your **appID** & **API Key**

2) **Initialize the SDK library in your app**
<br>
- In your index.html file, enter the SDK cdn script (or install with bower if you prefer)
```
<script src="//drrjhlchpvi7e.cloudfront.net/libs/stamplay-js-sdk/1.3.1/stamplay.min.js"></script>

```
```
$ bower install stamplay-js-sdk
```
- In your Javascript file, enter the initialization script at the top of the file
```
Stamplay.init('yourAppId');
```

3) **signup( )**
<br>
- When signing up a new user, note that **email** & **password** are required data that must be included in the request. 
Other values such as display name are optional.
```
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
```

![alt tag](public/images/user-signup-micro-repo.png)
