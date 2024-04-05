var fs=require("fs");
var read=fs.createReadStream("f1.txt");
var write=fs.createWriteStream("f2.txt");
read.pipe(write);
console.log('Updated');

