
    if (localStorage.getItem = ('status') == null) {
        location.href = "./index.html";
    }


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; 
    if (username == "admin" && password == "admin") {
        //alert("Giriş Başarılı");
        location.href = "./main.html";
        preventDefault();
        localStorage.setItem('status', 'PASS');
    }
            else {
        alert("Giriş Başarısız");

    }
        }

