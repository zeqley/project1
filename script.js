function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; 
    if (username == "admin" && password == "admin") {
        //alert("Giriş Başarılı");
        location.href = "./main.html";
        sessionStorage.setItem("loggedIn", "true");

    }
            else {
        alert("Giriş Başarısız");

    }
        }
