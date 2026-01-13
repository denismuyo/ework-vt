function login(){
    let user = document.getElementById("username").value.toLowerCase();
    let pass = document.getElementById("password").value;

    const accounts = {
        "denis": {password:"1234", page:"ceo.html"},
        "dominic": {password:"1234", page:"dominic.html"},
        "anne": {password:"1234", page:"anne.html"},
        "mary": {password:"1234", page:"mary.html"}
    };

    if(accounts[user] && accounts[user].password === pass){
        localStorage.setItem("user", user);
        window.location.href = accounts[user].page;
    } else {
        document.getElementById("msg").innerText = "Invalid credentials";
    }
}
