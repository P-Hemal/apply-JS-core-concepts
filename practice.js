// 1. Inch to Feet
// function inchToFeet(inches){
//     const feet = inches / 12;
//     return feet;
// }
// const heightInch = 84;
// const heightFeet = inchToFeet(heightInch);
// console.log('my height :', heightFeet.toFixed(2));

// 2. Even odd 
// function isEven(number){
//     let remainder = number % 2;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myNumber = isEven(98);
// console.log(myNumber);
// const myOddNumber = isEven(117);
// console.log(myOddNumber);


// 3. Leap Year 

// function isLeapYear(year){
//     let remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myYear = isLeapYear(2023);
// console.log('This year is Leap Year:', myYear)

// 4. odd sum 

function oddNumberOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + i;
        console.log(index, element, sum);
    }
    return sum
}
const myNumber = [12, 23, 31, 28, 47, 44, 52, 82, 77, 98];
oddNumberOfAnArray(myNumber);