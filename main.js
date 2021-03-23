var x=document.getElementById("can");
var ctx=x.getContext("2d");

function symbol()
{
var x=150;
var y=140;
color = "blue";
circle(x,y);

var x=270;
var y=140;
color = "black";
circle(x,y);

var x=390;
var y=140;
color = "red";
circle(x,y);

var x=210;
var y=190;
color = "yellow";
circle(x,y);

var x=330;
var y=190;
color = "green";
circle(x,y);

var x=50;
var y=40;
var l=440;
var b=250;
color="black"
rectangle(x,y,l,b);
}

function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke();    
}

function rectangle(x,y,l,b)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.rect(x,y,l,b);
    ctx.stroke();  
}
button1 = document.getElementById("buttonclick");
button1.addEventListener("click", clear);
function clear()
{
console.log("I am Clear Button");
document.getElementById("buttonclick").innerText = "Cleared";
ctx.clearRect(0, 0, x.width, x.height);
}