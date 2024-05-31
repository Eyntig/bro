let log_out = document.getElementById("log-out-btn");
if(log_out != undefined){
    log_out.addEventListener("click", () => {
        sessionStorage.removeItem("c_user_email");
        location.href = "login.html";
    });   
}

let c_user_email = document.getElementById("c-user-email");
if(c_user_email != undefined && sessionStorage.getItem("c_user_email") != null){
    c_user_email.innerHTML = `Current User: <b>${sessionStorage.getItem("c_user_email")}</b>`;
}