
var ch = document.querySelector("#ch");
ch.addEventListener("click",chpwd);

function chpwd(){
    var lspwd = localStorage.getItem("pwd");
    var oldpwd = document.querySelector("#oldpwd").value;
    var newpwd = document.querySelector("#newpwd").value;
    console.log(oldpwd)
    if(oldpwd==lspwd){
        if(newpwd != "" || null){
            localStorage.setItem("pwd",newpwd);
            alert("Password Changed !!!");
        }else{
            alert("New Password can't be Empty !!!")
        }
    }else{
        alert("Incorrect old password !!!");
    }
}