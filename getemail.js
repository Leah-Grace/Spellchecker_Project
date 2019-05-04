function getemail(users, name){
  console.log("users",users);
  const user = users.filter(userObj=>{
    return userObj.name === name;
  });
  if (user.length === 0){
    return null
  }
  return user[0].email;
}

module.exports = getemail;