setTimeout( ()=> {
    console.log("i miss my earphones");
    clearInterval(int);
}, 3000);

const int= setInterval( ()=>{
    console.log("after every sec");
}, 1000);

console.log(__dirname);
console.log(__filename);

const os = require('os');
console.log(os.platform());
console.log(os.homedir());