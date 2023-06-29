document.write("</br>"+Number("3.14789856556"));


let exp=3.14;
document.write("</br>"+exp.toExponential(1));
document.write("</br>"+exp.toExponential(2));
document.write("</br>"+exp.toExponential(3));
document.write("</br>"+exp.toExponential(4));

let numfixed=3.14;
document.write("</br>"+numfixed.toFixed(1));
document.write("</br>"+numfixed.toFixed(2));
document.write("</br>"+numfixed.toFixed(3));
document.write("</br>"+numfixed.toFixed(4));

let numprec=3.14;
document.write("</br>"+exp.toPrecision(1));
document.write("</br>"+exp.toPrecision(2));
document.write("</br>"+exp.toPrecision(3));
document.write("</br>"+exp.toPrecision(4));


// max number possible in js
document.write("</br>"+Number.MAX_VALUE);

// min number possible in js
document.write("</br>"+Number.MIN_VALUE);

//  positive infinity number possible in js
document.write("</br>"+Number.POSITIVE_INFINITY);

//  negative infinity number possible in js
document.write("</br>"+Number.NEGATIVE_INFINITY);

// the valurof() method returns a number as a number.

// parseInt()
document.write("</br>"+parseInt("-10")); 
document.write("</br>"+parseInt("-10.563")); 
document.write("</br>"+parseInt("10.33")); 
document.write("</br>"+parseInt("10 20 30")); 

// parseFloat()
document.write("</br>"+parseFloat("-10")); 
document.write("</br>"+parseFloat("-10.563")); 
document.write("</br>"+parseFloat("10.33")); 
document.write("</br>"+parseFloat("10 20 30")); 

// date,month,year,hours,minute,seconds,miliseconds
document.write("</br>"+new Date("2021-03-05")); 
document.write("</br>"+new Date()); //default time
document.write("</br>"+new Date(2018,24,12,23)); 
document.write("</br>"+new Date("december 25,2015 10:16:00")); 

var d =new Date();
document.write("</br>"+d.toString()); 
document.write("</br>"+d.toUTCString()); 
document.write("</br>"+d.toDateString()); 
document.write("</br>"+d.toISOString()); 

 //to find the perticulary date,time,hours,seconds,milliseconds
document.write("</br>"+d.getTime()); 
document.write("</br>"+d.getDay()); 
document.write("</br>"+d.getFullYear()); 
document.write("</br>"+d.getHours()); 
document.write("</br>"+d.getSeconds()); 
document.write("</br>"+d.getMilliseconds()); 