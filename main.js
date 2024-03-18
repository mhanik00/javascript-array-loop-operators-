
/**
 * *javascript -lesson -3*****
 * 
 ** while loop
 ** switch statement
 ** operator 
 ** array & array loop
 *
 */ 




//** */ while loop plus ..***

let player= 1;

while (player < 12) {
    console.log("player number:",player);
    player++;
}
//** */ while loop minus ..***
let img = 12;

while (img > 1) {
    console.log("image number:",img);
    img--;
}

//** */ switch statement ..***

let age = 20;

switch (age) {
    case 18:
        console.log("you are 18 years old");
        break;
    case 19:
        console.log("you are 19 years old");
        break;
    case 20:
        console.log("you are 20 years old");
        break;
    default:
        console.log("you are not 18 or 19 or 20 years old");
        break;
}

//** */ switch statement strings ..***

let playerName = "konok"

switch (playerName){
case "konok":
    console.log("konok");
    break;
 case "nayem":
    console.log("nayem");
    break;
 case "anik":
    console.log("anik");
    break;
 default:
    console.log("no one in the room");
    break;
}

//** */==/=== operator example ..***

// if value is same *****

const teamOne = 11;

const teamTwo= 11;

if (teamOne==teamTwo){
    console.log("same team");
}
else {
    console.log("different team");
}

// if value is same but type is not same *****
const One = "11";

const Two= 11;

if (One==Two){
    console.log("same team");
}
else {
    console.log("different team");
}

// for accurate results use/ === / ***

const playOne = "11";

const playTwo= 11;

if (playOne===playTwo){
    console.log("same team");
}
else {
    console.log("different team");
}
// *** use of % operators**

console.log(10%4)

//** use of ? operators */

let hisName = "one";
let herName = "two";

hisName===herName ? console.log("same name")

: console.log("different name")

// **use of && || !**

// if use && then you need to fill two condition for result...

let car = 22;

car >= 18 && car <= 20? console.log("it can fill two condition")

: console.log("it can't fill two condition")

// if use || then you need to fill any one condition for result...

let pen = 22;

pen >= 18 || pen <= 20? console.log("it can fill any one condition")

: console.log("it can't fill any condition")

// ** array & array loop

// array loop

let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// find biggest element

let array = [6,2,3,4,5];

let biggest = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
        biggest = array[i];
    }
}
console.log("biggest",biggest)

// find smallest element

let smallest = 5;

for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
}
console.log("smallest",smallest)


// *** end of js lesson 3 ***