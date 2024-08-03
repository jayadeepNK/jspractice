// let newBtn = document.createElement("button");
// newBtn.innerHTML = "click me";
// // document.body.appendChild(newBTN);

// newBtn.style.color = "white";
// newBtn.style.background="red";

// document.querySelector("body").prepend(newBtn)


// let para = document.querySelector("p");


// let Btn1 = document.querySelector("#Btn1");
// Btn1.onclick = () =>{
//     console.log("Btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are in box");
// }

//to toggile colors we used button above so if we need to run this we should commint it
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
