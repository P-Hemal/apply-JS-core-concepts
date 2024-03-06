// var heightInch = 71;
// var heightFeet = heightInch / 12;
// console.log(heightFeet.toFixed(2));

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const heightInch = 142;
const heightFeet = inchToFeet(heightInch);
console.log(heightFeet.toFixed(2));

const heightInch2 = 143;
const heightfeet2 = inchToFeet(heightInch2)
console.log(heightfeet2.toFixed(2))

