const axios = require('axios');

const httpClientePlugins ={

  get: async (url)=>{
    const {data} = await axios.get(url);
    return data;
    // const response = await fetch(url);
    // return  response.json(); 
  },
  post: async (url,body)=>{},
  put: async (url,body)=>{},
  delete: async (url)=>{}

};


module.exports={
  http: httpClientePlugins,
}