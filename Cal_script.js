function display(val) 
{ 
    document.getElementById("result").value+=val
} 
   
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = Function("return " +  x) ();
    document.getElementById("result").value = y 
} 
  
function clean() 
{ 
    document.getElementById("result").value = "" 
}

function undo() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}