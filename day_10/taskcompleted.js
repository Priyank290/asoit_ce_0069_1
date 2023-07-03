function demoOnclick1(){
    alert("Alert inline ");
}

function demoOnclick2(){
    alert("confirm !!");
}

// function demoOnclick3(){
//     prompt("enter the color :");
//     document.getElementById("container").style.backgroundColor="red";
//     //  resultElement.textContent = userInput
// }
function demoOnclick4(){
    document.getElementsByClassName("all")[0].style.backgroundColor="yellow";
}

function demoOnclick5(){
    document.getElementsByClassName("all")[0].style.backgroundColor="red";
}

function divBGchangetobackground(){
    document.getElementById("container").style.backgroundColor=prompt("enter background color here :")
}

function colorpicker(){
    document.getElementById("container").style.backgroundColor=document.getElementById("kp1").value;
}

function colorpicker2(){
    document.getElementsByClassName("all")[0].style.backgroundColor=document.getElementById("kuldip").value;
}

function promptfun(){
    const var1=prompt("enter the first name :")
    const var2=prompt("enter the second name :")
    const var3=prompt("enter the third name :")
    alert(var1+" "+var2+" "+var3);
}