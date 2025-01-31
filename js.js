let register = document.getElementById("register");
if (register != undefined) {
    register.addEventListener("submit", e => {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let con_password = document.getElementById("con_password").value;

        let username_err = document.getElementById("username-err");
        let email_err = document.getElementById("email-err");
        let password_err = document.getElementById("password-err");
        let con_password_err = document.getElementById("con-password-err");

        username_err.innerText = "";
        email_err.innerText = "";
        password_err.innerText = "";
        con_password_err.innerText = "";

        if (username == "") {
            username_err.innerText = "Username is required!";
        } else {
            if (email == "") {
                email_err.innerText = "Email is required!";
            } else {
                if (password == "") {
                    password_err.innerText = "Password is required!";
                } else {
                    if (con_password == "") {
                        con_password_err.innerText = "Confirm Password is required!";
                    } else {
                        if (password.length < 8) {
                            password_err.innerText = "Your password length must be more than 8!";
                        } else {
                            if (password != con_password) {
                                password_err.innerText = "Password and Confirm Password didn't match!";
                                con_password_err.innerText = "Password and Confirm Password didn't match!";
                            } else {
                                let old_users = JSON.parse(localStorage.getItem("users"));

                                let users;
                                if (old_users) {
                                    users = {
                                        "username": username,
                                        "email": email,
                                        "password": password
                                    };
                                    old_users.push(users);
                                    localStorage.setItem("users", JSON.stringify(old_users));
                                } else {
                                    users = [
                                        {
                                            "username": username,
                                            "email": email,
                                            "password": password
                                        }
                                    ];
                                    localStorage.setItem("users", JSON.stringify(users));
                                }
                                sessionStorage.setItem("c_user_email", email);
                                location.href = "index.html"; 
                            }
                        }
                    }
                }
            }
        }
    });
}

let login = document.getElementById("login");
if (login != undefined) {
    login.addEventListener("submit", e => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let email_err = document.getElementById("email-err");
        let password_err = document.getElementById("password-err");

        email_err.innerText = "";
        password_err.innerText = "";

        if (email == "") {
            email_err.innerText = "Email is required!";
        } else {
            if (password == "") {
                password_err.innerText = "Password is required!";
            } else {
                if (password.length < 8) {
                    password_err.innerText = "Your password length must be more than 8!";
                } else {
                    let users = JSON.parse(localStorage.getItem("users"));

                    let email_res = users.find(item => item.email == email);
                    let password_res = email_res.password;

                    if (email_res == undefined) {
                        email_err.innerText = "Email is invalid!";
                    } else {
                        if (password_res != password) {
                            password_err.innerText = "Password is invalid!";
                        } else {
                            sessionStorage.setItem("c_user_email", email);
                            location.href = "index.html";
                        }
                    }
                }
            }
        }
    });
}