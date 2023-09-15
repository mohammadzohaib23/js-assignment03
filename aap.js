
// Q 01

var studentName = [];
// Q 02
var a = [];
// Q 03
var x = ["aqib"];
// Q 04
var y = [45];
// Q 05
var z = [true];
// Q 06
var mixed = ["baziq", 12, false, undefined, null];
// Q 07
var qual = ["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
var arr = ["Qualifications :" + "<br>" + "1)" + qual[0] + "<br>" + "2)" + qual[1] + "<br>" + "3)" + qual[2] + "<br>" + "4)" + qual[3] + "<br>" + "5)" + qual[4] + "<br>" + "6)" + qual[5] + "<br>" + "7)" + qual[6] + "<br>" + "8)" + qual[7] + "<br>"];
document.write(arr);

// Q 08

var stud = ["Aaqib", "Baziq", "Zohaib"];
var score = [320, 230, 480];
var total = 500;

var per1 = 320 / total * 100;
var per2 = 230 / total * 100;
var per3 = 480 / total * 100;

document.write("Score of Aaqib is" + " " + score[0] + ".Percentage :" + " " + per1 + "%" + "<br>");
document.write("Score of Baziq is" + " " + score[1] + ".Percentage :" + " " + per2 + "%" + "<br>");
document.write("Score of Zohaib is" + " " + score[2] + ".Percentage :" + " " + per3 + "%" + "<br>");

// Q 09

var colorName = ["Pink", "Red", "Blue"];
document.write(colorName.join(",") + "<br><br>");

// a
var colorName1 = prompt("Enter colour to be added at the begining");
colorName.unshift(colorName1);
document.write(colorName.join(",") + "<br><br>");
// b
var colorName2 = prompt("Enter colour to be added at the end");
colorName.push(colorName2);
document.write(colorName.join(",") + "<br><br>");
// c
colorName.unshift("grey","Orange");
document.write(colorName.join(",") + "<br><br>");
// d
colorName.shift();
document.write(colorName.join(",") + "<br><br>");
// e
colorName.pop();
document.write(colorName.join(",") + "<br><br>");
// f
var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add at that index:");
colorName.splice(indexToAdd, 0, colorToAddAtIndex);
document.write(colorName.join(",") + "<br><br>");
// g
var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorName.splice(indexToDelete, numberOfColorsToDelete);
document.write(colorName.join(",") + "<br><br>");

// Q 10
var studentScores = [320,230,480,120];
document.write("students scores are : "+studentScores + "<br><br>");
studentScores.sort(function(a,b){
  return(a - b);
});
document.write("ordered scores are : "+ studentScores + "<br><br>");
// Q 11
var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities are :"+ cities + "<br><br>");
var selectedCities = cities.slice(0,3);
document.write("selected cities are :" + selectedCities+ "<br><br>");
// Q 12
var arr = ["This" ,  "is" , " my" ,  "cat"];
document.write("Array :"+ arr + "<br><br>");
document.write("String :"+ arr.join(" ") + "<br><br>");

// Q 13
var devices = ["keyboard","mouse","printer","monitor"];
document.write("Devices: " + devices + "<br><br>"); 
var fifoQueue = [];

fifoQueue.push("keyboard");
fifoQueue.push("mouse");
fifoQueue.push("printer");
fifoQueue.push("monitor");

var firstValue = fifoQueue.shift();
var secondValue = fifoQueue.shift();
var thirdValue = fifoQueue.shift();
var fourthValue = fifoQueue.shift();

document.write("Out: " + firstValue + "<br><br>");   
document.write("Out: " + secondValue+ "<br><br>"); 
document.write("Out: " + thirdValue+ "<br><br>"); 
document.write("Out: " + fourthValue+ "<br><br>"); 

// Q 14
var devices1 = ["keyboard","mouse","printer","monitor"];
document.write("Devices: " + devices + "<br><br>"); 
var lifoQueue = [];

lifoQueue.push("keyboard");
lifoQueue.push("mouse");
lifoQueue.push("printer");
lifoQueue.push("monitor");

var firstValue = lifoQueue.pop();
var secondValue = lifoQueue.pop();
var thirdValue = lifoQueue.pop();
var fourthValue = lifoQueue.pop();

document.write("Out: " + firstValue + "<br><br>");   
document.write("Out: " + secondValue+ "<br><br>"); 
document.write("Out: " + thirdValue+ "<br><br>"); 
document.write("Out: " + fourthValue+ "<br><br>"); 

// Q 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write("<select>");

document.write("<option value='" + phoneManufacturers[0] + "'>" + phoneManufacturers[0] + "</option>");
document.write("<option value='" + phoneManufacturers[1] + "'>" + phoneManufacturers[1] + "</option>");
document.write("<option value='" + phoneManufacturers[2] + "'>" + phoneManufacturers[2] + "</option>");
document.write("<option value='" + phoneManufacturers[3] + "'>" + phoneManufacturers[3] + "</option>");
document.write("<option value='" + phoneManufacturers[4] + "'>" + phoneManufacturers[4] + "</option>");
document.write("<option value='" + phoneManufacturers[5] + "'>" + phoneManufacturers[5] + "</option>");

document.write("</select>");


























































