let container=document.querySelector(".container");


for (let i=0;i<256;i++){
    let gridbox= document.createElement("div");
    gridbox.style.cssText="border:1px solid black; height:60px; width:60px";
    container.appendChild(gridbox);
 }


let div=document.querySelector("div");
//div.addEventListener("click",function (e){  
//console.log(e.target)
// }); to test if it is working

div.addEventListener("mouseover",function (e){
    e.target.style.background="black";  //e to target the divs.
})


let reload=document.querySelector(".reload");
reload.addEventListener("click",function(){
 location.reload();
 askforValue();
});

function eraseGrid() {
container.textContent="";
}

function askforValue() {
  let x= parseInt(prompt("Please enter value choice for gridbox sizing-16 (default), 10, 20 or 50"));
  if (x===10)  {
    eraseGrid();
    for (let i=0;i<100;i++) {
        let gridbox1= document.createElement("div");
        container.appendChild(gridbox1);
        gridbox1.style.cssText="border:1px solid black; height:60px; width:60px";
        container.style.cssText="grid-template-columns: repeat(10)"
     }
   }
};



let ten=document.querySelector(".tengrid");
ten.addEventListener("click",function(){
    eraseGrid();
    for (let i=0;i<100;i++) {
        let gridbox1= document.createElement("div");
         container.appendChild(gridbox1);
         gridbox1.style.cssText="border:1px solid black; height:60px; width:60px";
         container.style.cssText="grid-template-columns: repeat(10)";
    }
});