//const app=require('./app')

//const arr=[7,8,6,7,9,3,2,45,5];
// console.log(arr[5]);
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());

// const arr=[7,8,6,7,9,3,2,45,5];
// arr.filter((item)=>{
//      console.log(item);
// })


// const arr=[7,8,6,7,5,9,2,45,5];
// let result = arr.filter((item)=>{
//     return item===5
// })
// console.warn(result);
// const arr1=[7,8,6,7,5,9,2,45,5];
// let result1 = arr.filter((item)=>{
//     return item>20
// })
// console.warn(result1);

// core modules
// // const fs=require("fs"); 
// console.log("by aditya");

// fs.writeFileSync("hello.txt","learn nodejs")

// console.log("--> ",__dirname);
// console.log("--> ",__filename);

// const fs=require("fs").writeFileSync; 
// fs("abc.html","<h1>hello</h1>")

// const http=require("http");

// function datacontrol(req,resp){
//   resp.write("<h1>welcome to nodejs ,callback function</h1>server on http://localhost:3000");
//   resp.end();
// }

// http.createServer(datacontrol).listen(3000);

//===========================

// const color=require('colors')
// console.log("hello".green);

// console.log("I did it");
// console.log(100+20);

// const http=require("http");

// const data=require('./data');

// http.createServer((req,resp)=>{
//    resp.writeHead(500,{'content-Type':'application\json'});
//    resp.write(JSON.stringify(data));
//    resp.end();
// }).listen(5000);

// command line

// console.log("code by me");
// //console.log(process);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[0]);

// const fs=require("fs");

// const input=process.argv;

// if(input[2]=='add'){
//    fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//    fs.unlinkSync(input[3]);
// }
// else{
//    console.log('invalid input');
// }
//--------------------
// const fs=require("fs");
// const path=require("path");
// const dirPath=path.join(__dirname,'files');

// for(i=0;i<5;i++)
// {
//    fs.writeFileSync(dirPath+"/hello"+(i)+".txt","simple text file"+(i)+" ")
// }

//fs.writeFileSync(dirPath+'apple.txt','this is apple file')

//-------------------------------
// const fs=require("fs");
// const path=require("path");
// const dirPath=path.join(__dirname,'files');
// fs.readdir(dirPath,(err,files)=>{
//   // console.warn(files); => get files in array
  
//   files.forEach((item)=>{
//     console.log(item);
//   })
// })
//-------------------------------

//   const fs=require("fs"); // => file module import
//   const path = require("path"); 
//   const dirPath=path.join(__dirname,'CRUD')
//   console.log('path is '+dirPath);
//   const filePath=`${dirPath}/apple.txt`;

  //fs.writeFileSync(filePath,'this is simple text file');  => create file
// fs.readFile(filePath,'utf-8',(err,item)=>{
//    console.log(item); => read File
// })
// fs.appendFile(filePath,' & feel good !!!!!!!!!!!!',(err)=>{
//       if(!err) { console.log("file is updated successfully..")}
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is renamed")
// })

//fs.unlinkSync(`${dirPath}/fruit.txt`);
// --------------
// console.log("start execution");
// setTimeout(()=>{
// console.log("middle of execution")
//  },2000);
// console.log("complete execution");
//--------------------------

// let a=10;
// let b=0;

// setTimeout(()=>{
//      b=30;
//       },2000)
// console.log(a+b);
// ->     10    not updated changed value thats why we use promises
//--------------------------------------------

// let a=10;
// let b=0;

// let waitingData=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(30);
//      },2000)
// });

// waitingData.then((data)=>{
//    b=data;
//    console.log(a+b);
// });

// ------------------------------------------------

// console.log("starting up");

// setTimeout(()=>{
//   console.log("2 second log")
// },2000)

// setTimeout(()=>{
//   console.log("0 second log")
// },0)


// console.log("finishing up");

// -----------------------------------------------------



