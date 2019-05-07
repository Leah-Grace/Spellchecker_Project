const express = require("express");
const users = require("./data.js");
const getemail = require("./getemail.js");
const app = express();

//Serve static index.html page 
app.use(express.static("public"));

//make use of routes (CRUD)
app.use('/api', require("./routes/api"));

//send GET request to root and return message
app.get('/', (res, req) => {
  res.send({request: "GET This server.js"});
})
//send GET request
app.get("/getemail", (req, res) => {
  const name = req.query.name;
  const email = getemail(users, name);
  if (email){
    res.send("Your email is: " + email);
  } else {
    res.send("User does not exist");
  }
});

const port = process.env.PORT || 5500;
app.listen(port, ()=>console.log(`Server listening on port ${port}`));
