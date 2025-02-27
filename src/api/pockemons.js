import axios from "axios";

export const loadList = async (limit, offset) =>{
    try{
        const res = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}}&offset=${offset}`)).data;
        return res.results;
    }catch(err){
        console.error(err);
        return [];
    }
} 


export const loadPockemon = async (url)=>{
    if(!url)
        return;
    try{
        const res = (await axios.get(url)).data;
        return res;
    }catch(err){
        console.error(err)
        return null;
    }
}