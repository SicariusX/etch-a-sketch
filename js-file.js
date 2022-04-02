let container=document.querySelector(".container");



function createGrid(){
for (let i=0;i<x;i++){
    let xAxis= document.createElement("div");
    let divHeightandWidth=(800/x);
    xAxis.style.cssText=`border:1px solid black;height:${divHeightandWidth}px;width:${divHeightandWidth}px`;
    container.appendChild(xAxis);
for (let i=0;i<x;i++) {
    let yAxis=document.createElement("div");
    yAxis.style.cssText=`border:1px solid black;height:${divHeightandWidth}px;width:${divHeightandWidth}px`;
    xAxis.appendChild(yAxis);
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
  x= parseInt(prompt("Please enter value size for gridbox sizing"));
  eraseGrid();
  createGrid();
}

function eraseGrid() {
container.textContent="";
}

let x=16;
createGrid();
