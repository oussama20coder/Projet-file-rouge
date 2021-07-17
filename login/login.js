const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

document.querySelector("#returnSignUp").addEventListener("click", () => {
  document.getElementById("login").style = "display:none";
  document.getElementById("signup").style = "display:flex";
});

document.querySelector("#returnLogin").addEventListener("click", () => {
  document.getElementById("signup").style = "display:none";
  document.getElementById("login").style = "display:flex";
});


// =========================================== SIGN UP ==========================================//

document.getElementById("signup").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  console.log(username, password, password2);

  if (password === password2 && password.length > 7) {
	axios({
		method: 'post',
		data: {
			username: username,
			password: password
		  },
		url: 'api/signup.php',
	  }).then(function (response) {
		console.log(response)
    if (response.data === "yes") {
      document.getElementById("signup").style = "display:none";
      document.getElementById("login").style = "display:flex";
    }
		// console.log(response)
	  });;
  } else {
	  console.log('noooon')
  }
});

// =============================  ====================================//



document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("usernameLogin").value;
  let password = document.getElementById("passwordLogin").value;
  console.log(username, password);

  if (password.length > 7) {
	axios({
		method: 'post',
		data: {
			username: username,
			password: password
		  },
		url: 'api/login.php',
	  }).then(function (response) {
      if ((response.data).constructor === Array) {
        window.location.replace('../index.html')
        console.log(response)
      }

	  });
  } else {
	  console.log('noooon')
  }
});



// ================================= SHOW PASSWORD ====================================//
function myFunction() {
  var x = document.getElementById("password");
  var x2 = document.getElementById("password2");
  var x3 = document.getElementById("passwordLogin");
  if (x.type === "password" && x2.type === "password") {
    x.type = "text";
    x2.type = "text";
    x3.type = "text";
  } else {
    x.type = "password";
    x2.type = "password";
    x3.type = "password";
  }
}
