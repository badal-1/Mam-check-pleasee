firebaseConfig = {
  apiKey: "AIzaSyAgP46s65HZoF2s6EFQH4BU-qyPdeFRbX0",
  authDomain: "mystfairy-com.firebaseapp.com",
  projectId: "mystfairy-com",
  databaseURL: "https://mystfairy-com-default-rtdb.firebaseio.com",
  storageBucket: "mystfairy-com.appspot.com",
  messagingSenderId: "35691482224",
  appId: "1:35691482224:web:541bf0e0dea5b6b275f8b5",
  measurementId: "G-WKVF6EHD92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //start of js code after firebase();
  l= localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+l+"!";


function k(){
    var aud= new Audio("Believer.mp3");
    aud.play();
    aud.loop=true;
    }
    k();
    //hhcsbg
      function AddRoom() {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
      
        window.location = "kwitter_page.html";
      }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("room name- "+ Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML+= row;
        //End code
        });});}
        getData();
        function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
        }
        function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
          }
      