/*global fetch*/
function handleClick(){
  const name = document.getElementById("name").value;
  
  console.log(name);
  fetch("/getemail" + "?" +"name=" + name)
    .then(response=>response.text())
    .then(function(response){
      console.log(response);
      document.getElementById("results").innerHTML = response;
    });
  
  
}