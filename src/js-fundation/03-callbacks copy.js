
const users =[
  {
    id:1,
    name:'Juan'
  },
  {
    id:2,
    name:'André'
  }
];

function getUserById(id, callback){
  const user = users.find(function(user){
    return user.id===id;
  });

  if(!user){
    return callback(`USUARIO con id: ${id} no esta registrado en sistema`);
  }

  return callback(null,user);
}

module.exports={
  getUserById
}





