/*const fetchData= async ()=>{
const response= await fetch('https://www.craigslist.org/about/');
const html = await response.text();
console.log(html);
}
fetchData();*/
//no 1
/*
const fetchData = async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(json);
}
fetchData();
*/
//no 2

/*const pikachu = async()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const json = await response.json();
    //console.log(json);
    console.log(json.sprites.other["official-artwork"]["front_default"]);
}
pikachu();*/
//download image from an api
/*
import fs from 'fs/promises';

const saveImg= async ()=>{
    const response = await fetch('https://w.wallhaven.cc/full/vq/wallhaven-vq6x28.jpg');
    const blob= await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    try{
        fs.writeFile("./images.jpg", buffer);
        console.log("sucess");
    }catch(err){
        console.log("file not written");
    }
}
saveImg();
*/