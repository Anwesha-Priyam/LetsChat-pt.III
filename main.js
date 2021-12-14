user_name="";

function addUser()
{
    user_name=document.getElementById("username").value;
    localStorage.setItem("User name", user_name);
    window.location="kwitter_room.html"
}