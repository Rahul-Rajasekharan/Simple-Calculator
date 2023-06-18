function buttonClick(val)
{

    document.getElementById("screen").value+=val
}

function clearScreen(){

    document.getElementById("screen").value=""
}
var oldValue
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function deleteLast(){
  var text=document.getElementById("sceen").value
  
}

function butnPlus(){
     var value=document.getElementById("screen").value
     oldValue=parseInt(value)
     document.getElementById("screen").value=""
}
  