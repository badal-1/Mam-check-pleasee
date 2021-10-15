function adduser(){
w = document.getElementById("user_name").value;
localStorage.setItem("user_name", w);
var t = document.getElementById("dfi").value;
if (t == "amover18"){
window.location="chat.html"; 
}
else{
window.alert("Please type 'amover18' in the text-box");
}
}