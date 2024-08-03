// const student = {
//     fullName: "Jayadeep",
//     marks: 94,
//     printMarks: function() {
//         console.log("marks =", this.marks);
//     },
// };

const { response } = require("express");


// const employees = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// };


// const karnajohar = {
//     salary: 60000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     },
// }

// karnajohar.__proto__ = employees;

// class ToyotaCar {
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");


//  function getData(dataId, getnextData) {
//     setTimeout(()=>{
//         console.log("data" , dataId);
//         if(getnextData){
//             getnextData();
//         }
//     },2000);
    
//  }


// getData(1,() => {
//     console.log("Id 2 is loading...")
//     getData(2, () => {
//         console.log("Id 13 is loading..")
//         getData(13);
//     });
// });


// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise")
//     resolve("Payment Success")
// });




// function getData(dataId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data" , dataId);
//             resolve("All done");
//         },6000);
//     })
//  }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         reject("network error");
//         resolve("ehrfignrmfierh")
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise success" ,res);
// });

// promise.catch((err) => {
//     console.log("Failed", err);
// });

// function asyncFunc1() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         },6000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("res");
//         },6000);
//     });
// }

// console.log("Fetching data1....")
// asyncFunc1().then((res) => {
//     console.log("Fetching data2...")
// asyncFunc2()
// .then((res) => {});
// });

// async function getAllData(){
//     console.log("1223");
//     await getData(1);
//     console.log("1223");
//     console.log("1223");
//     console.log("1223");
//     await getData(2);
//     console.log("1223");
//     console.log("1223");
// }

// (async function (){
//     console.log("1223");
//     await getData(1);
//     console.log("1223");
//     console.log("1223");
//     console.log("1223");
//     await getData(2);
//     console.log("1223");
//     console.log("1223");
// })();

 
const URL = "";//url
const catFact = document.querySelector(".fact");
const btn = document.querySelector("#btn");
//while using async await function
const getFact = async ()=>{
    console.log("data fetching....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    catFact.innerText = data;
}

//while using promises
function getFacts(){
    fetch(URL).then((response) => {
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        catFact.innerText = data;
    });
}
btn.addEventListener("click",getFact);