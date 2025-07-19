/* Else if statement 
var myAge = 25;

if (myAge > 30) {

    document.write("You are over 30!"); 
    
} else if (myAge > 20) {
   
    document.write ("You are over 20!");

} else if (myAge > 10) {
    
    document.write ("You are over 10!");

} else {
    
    document.write("You are not over 10!");
} */

/* else if statement in different conditions 

var myAge = 25;

if (myAge >= 18 && myAge <= 30){
    
    document.write ("You can come, you cool dude!");

} else {

    document.write ("You aint coming!");
} */

/* else if statement in different conditions 
var myAge = 25;

if (myAge < 18 || myAge > 30 || myAge === 25) {
    
    document.write ("You aint coming!");

} else {

    document.write ("You can come, you cool dude!");
} */


/* While Loop
var age = 5;

while (age < 10) {

    console.log ("Your age is less than 10!");
    age++;
}

document.write ("You are now over 10!"); */

/** for loop 

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {

    console.log ("This is link number" + i);

}

document.write ("all links now looped"); */


/* for (i = 0; i < 10; i++) {

    if(i === 5 || i === 3){
        
        continue;

    }
    
    console.log (i);

    if (i === 7) {

        break;
    }

} 

console.log ("I have broken out of the loop"); */


/* function getAverage (a,b){

    var average = (a + b) / 2; //local variable/scope (can be use only in part of the code)
    console.log(average);
    return average;

}

var myResult = getAverage(7,12); //global variable/scope (can be use anywhere of the code)

function logResult() {

        console.log( "the average is " + myResult + " inside the function");
}

logResult(); */

/* numbers 
var a = "5";
var b = 5;

console.log (a+b);
console.log (typeof (a + b)); */

/* var a = 5;
var b = 6;

console.log (a + b);

console.log (Math.max(7, 4, 8, 9));  */

/* var a = 6;
var b = 5;

//double negative
if (!isNaN(a)) {
    console.log ("that int even a number, thickie");

} else {
    console.log("meaning of life is " + (a * b));
} */


/* var myString = 'I\am a "fun ninja" string';

if (myString.indexOf("ninja") === -1) {

    console.log ("the word ninja is not in the string");

} else {
    console.log("the word ninja starts at postition" 
        + myString.indexOf("ninja"));
} */

/* split string 
var str = "hello world";
var str2 = str.slice(2);

var tags = "meat, ham, salami, beef, chicken";

var tagsArray = tags.split(",");
console.log (tagsArray); */

/* OBJECTS and METHODS

var myCar = new Car ();
myCar.lenght/maxSpeed
myCar.drive()/myCar.break()

myCar.topSpeed
myCar.drive(35)

var myString = new String()

myStrin = "hello";
myString.length
myString.toLowerCase() 

var myString2 = "hi there";
myString.toUpperCase ()
console.log (myString2);
*/

/* Object and literal object

--> Масиви/arrays 
var myArray = new Array();
myArray[0] = 8;
myArray[1] = "Hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function() { 
    console.log("now driving");};

myCar.drive();

var myCar2 = {

    maxSpeed: 80, 
    driver: "Net Ninja",
    drive: function() 
    { console.log("now driving again");} };

console.log(myCar2.maxSpeed);
myCar2.drive(); */

/* This function

var myCar2 = {

    maxSpeed: 80, 
    driver: "Koleto",
    drive: function(speed, time) { 
        console.log(speed * time);
    },
    logDriver: function() {
        console.log("driver name is " + this.driver)
    }
    
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
*/


/* Function constructor
var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) { 
        console.log(speed * time);
};
    this.logDriver = function(){
        console.log ("driver name is " + this.driver)
    };

}

var myCar = new Car (70, "Koleto1");
var myCar2 = new Car (20, "Koleto2");
var myCar3 = new Car (50, "Koleto3");
var myCar4 = new Car (60, "Koleto4");

myCar.drive(30,5);
myCar3.logDriver();
*/

/* The date object 

var myPastDate = new Date (1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date (2515, 0, 31, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date (1985, 0, 15, 11, 15, 25);
var birthday2 = new Date (1985, 0, 15, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getTime());

if (birthday.getTime == birthday2.getTime) {

    console.log("birthdays are equal");

} else {
    console.log ("birthday are not equal");
} */

/*Button "show more" and "show less" function

function setUpEvents(){

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {

    if(content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show less";
    }

}; 

}

window.onload = function(){

    setUpEvents();
};*/

/* Colour Changer and mouseclick function 
var myMessage = document.getElementById("message");

function showMessage(){

    myMessage.className = "show";
}

setTimeout(showMessage, 3000);

var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColour() {
    if (counter >= colours.length){
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

var myTimer = setInterval(changeColour, 3000);
colourChanger.onclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";

}; */

/* SUBMIT BUTTON WITH FUNCTION TRUE or FALSE

window.onload = function () {
  var myForm = document.forms.myForm;
  var message = document.getElementById("message");

  myForm.onsubmit = function (event) {
    if (myForm.name.value == "") {
      message.innerHTML = "Please enter a name";
      event.preventDefault(); // Stop form from reloading
    } else {
      message.innerHTML = "";
    }
  };
}; */

/* JQUARY test commands

var myPara = document.getElementById("content").getElementsByTagName("p")[5];
var myPara2 = $("#content p:last-child");

var myPara2 = $("#content p:last-child");
undefined
myPara2.addClass("test");
myPara2.removeClass("test");
myPra2.fadeOut();
myPara2.fadeOut();
myPara2.fadeIn();
myPara2.css({position: "relative", color: "red"});
myPara2.animate({left: "50px"});

*/
