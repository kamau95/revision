const fs = require('fs');
//read a file
fs.readFile("./blog/info.txt", (err, data) => {
    if(err){  console.log("invalid file name")}
    console.log(data.toString());
})

//writing to a file
fs.writeFile("./blog/info1.txt", "my small message", ()=>{
    console.log("file successfully written");
});

//directories
if(!fs.existsSync("./assets")) {
    fs.mkdir("./assets", ()=> {
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err)=> {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting files
if(fs.existsSync('./blog/delete.txt')) {
    fs.unlink('./blog/delete.txt', (err)=> {
        if (err) {
            console.log(err);
        }
        console.log("file has been deleted");
    })
}