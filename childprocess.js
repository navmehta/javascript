//OPENING VS CODE
 let Ram= require("child_process");
 console.log("Triyng to open vs code:");
Ram.execSync("code");
console.log("Opened vs code:")
//............................................
// OPENING CHROME
let Ram= require("child_process");
console.log("Triyng to open chrome:");
Ram.execSync("start chrome");
console.log("Opened chrome:")
// .....................................
// OPENING OTHER JAVA FILE
let Ram= required("child_process");
let p= Ram.execSync("node link.js");
console.log("The",p);