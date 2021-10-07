function addUser()
{
    user_name=document.getElementById("username").value;
    localStorage.setItem("User name", username);
    window.location="kwitter_room.html"
}