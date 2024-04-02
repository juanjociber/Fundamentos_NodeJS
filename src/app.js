// const {emailTemplate} = require('./js-fundation/01-template')

// require('./js-fundation/02-destructuring')

// console.log(emailTemplate)

// const {getUserById} = require('./js-fundation/04-arrow')

// const { getAge,getUUID } = require('./plugins');

// const { buildMakePerson } = require('./js-fundation/05-factory');


const getPokemonById = require('./js-fundation/06-promises');

getPokemonById(4)
.then(pokemon => console.log({pokemon}))
.catch((err)=>console.log(err))
.finally(()=>console.log('Terminado'));








//!Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge }); 

// const obj ={name :'Juan', birthdate:'1977-08-13'};

// const juan = makePerson(obj);

// console.log({juan});
//!----------------------------------------------



// const id= 1;

// getUserById(id,(error,user)=>{
//   if(error){
//     throw new Error(error);
//   }
//   console.log({user});
// });

// getUserById(id,function(error,user){
//   if(error){
//     throw new Error(error);
//   }
//   console.log({user});
// });