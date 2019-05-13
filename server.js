const express = require("express");
const users = require("./data.js");
const getemail = require("./getemail.js");
//set-up express app
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Serve static index.html page 
app.use(express.static("public"));

//connect to mongodb
mongoose.connect('mongodb://locahhost/spellcheckerProject', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
//Net Ninja Rest Api @2:50 mongoose 

//body-Parser to parse data BEFORE route handler
//Building Middleware
app.use(bodyParser.json());

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

const port = process.env.PORT || 8081;
app.listen(port, ()=>console.log(`Server listening on port ${port}`))
  .on('err', ()=>console.log(`ERROR ${err}`));
