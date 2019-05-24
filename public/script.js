/*global fetch*/
function handleClick(){
  const name = document.getElementById("getuserInfo").value;
  
  console.log(name);
  fetch("/getemail" + "?" +"name=" + name)
    .then(response=>response.text())
    .then(function(response){
      console.log(response);
      document.getElementById("showEmail").innerHTML = response;
    });
};

// function POSTUserInfo(){
//   const newUserName = document.getElementById("user-name").value;
//   const newUserId = document.getElementById("user-id").value;
//   const newUserMessage = document.getElementById("message").value;
//   console.log(newUserName, newUserId, newUserMessage);

//   fetch("POSTREQROUTE" + newUserName + newUserId + message)
// }