  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_RVhk36Oq6D0-aWv7KuA32sg3hIlXTOg",
    authDomain: "kwittwit.firebaseapp.com",
    databaseURL: "https://kwittwit-default-rtdb.firebaseio.com",
    projectId: "kwittwit",
    storageBucket: "kwittwit.appspot.com",
    messagingSenderId: "601731185376",
    appId: "1:601731185376:web:a4180f33b492679454ae85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 userName=localStorage.getItem("User name");
 document.getElementById("username").innerHTML="Welcome:"+ userName + "! Have fun chatting/creating rooms for friends to join!";
 function addRoom()
{
  roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"Adding room"
  });
  localStorage.setItem("Room Name", roomName);
  window.location="KwitTwit_chat.html";
}

function getData() {
  firebase.database().ref("/").on('value', 
  function(snapshot) 
{
   document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) 
   {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room" + Room_names);
      row="<div class='room' id="+Room_names+"onclick='showChat(this.id)'># + Room_names + </div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }

getData();

 function showChat(Name)
{
  console.log(Name);
  localStorage.setItem("Room Name", Name);
  window.location="KwitTwit_chat.html";
}
function logOut()
{
   window.location="index.html";
   localStorage.removeItem("Room Name");
   localStorage.removeItem("User name");
}