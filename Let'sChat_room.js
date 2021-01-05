var username=localStorage.getItem("user_name");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVxm-Zs--YUvXg41q-b_H9WnfLSBLwSNE",
  authDomain: "c-94-project.firebaseapp.com",
  databaseURL: "https://c-94-project-default-rtdb.firebaseio.com",
  projectId: "c-94-project",
  storageBucket: "c-94-project.appspot.com",
  messagingSenderId: "23593219528",
  appId: "1:23593219528:web:10150b3e9a29f42703bcfd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom()
{
  roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"Adding room"
  });
  localStorage.setItem("Room Name", roomName);
  window.location="Let'sChat_chat.html";
}
function getData() 
 {
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
      row="<div class='room' id="+Room_names+" onclick='showChat(this.id)'># + Room_names + </div><hr>"
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
  window.location="Let'sChat_chat.html";
}
function logOut()
{
  window.location="index.html";
  localStorage.removeItem("User Name");
  localStorage.removeItem("Room Name");
}