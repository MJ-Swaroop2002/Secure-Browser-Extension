
chrome.runtime.onInstalled.addListener(function(info){
    console.log(info);
    if(info.reason == "install"){
        setnewpwd();
    }
});

chrome.runtime.onStartup.addListener(function(info){
    
    var lspwd = localStorage.getItem("pwd");
    if(lspwd == null){
        setnewpwd();
    }else{
        var ask = prompt("Enter Password");
        if(ask==lspwd){
            alert("Enjoy !");
        }else{
            alert("Incorrect !");
            clsbrw();
        }
    }
});
function setnewpwd(){
    var pwd = prompt("Enter New Password to Protect Your Browser !");
    if(pwd == ""){
        alert("Password can't be Empty !");
        setnewpwd();
    }else{
        localStorage.setItem("pwd",pwd);
        alert("Password Saved !");
    }
}

function clsbrw(){
	chrome.windows.getAll({}, function(window) {
	for(var i=0;i<window.length;i++){
	chrome.windows.remove(window[i].id);}	 
});
}