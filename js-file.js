let container=document.querySelector(".container");

function createGrid(){
  for (let i=0;i<x;i++){
        let createDivs= document.createElement("div"); //creates the square divs
        let divHeightandWidth=(800/x);
        createDivs.style.cssText=`border:1px solid black;height:${divHeightandWidth}px;width:${divHeightandWidth}px`;
        container.appendChild(createDivs);
        for (let i=0;i<x;i++) {
          let iterationOfLoops=document.createElement("div"); //how many loops do we want of the divs?
          iterationOfLoops.style.cssText=`border:1px solid black;height:${divHeightandWidth}px;width:${divHeightandWidth}px`;
          createDivs.appendChild(iterationOfLoops);
        }  
    }
 }

let div=document.querySelector("div");
div.addEventListener("mouseover",function (e){
    e.target.style.background="black"; 
})


let reload=document.querySelector(".reload");
reload.addEventListener("click", resetButton)

function resetButton () {
  x= parseInt(prompt("Please enter value size for gridbox sizing (10-100)"));
  eraseGrid();
  createGrid();
}

function eraseGrid() {
container.textContent="";
}

let x=16;
createGrid();
