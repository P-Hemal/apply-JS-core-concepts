// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
        
//     }
//     return sum;
// } 
// const myNumbers =[12, 23, 37, 44, 52, 71, 85, 98];
// getSumOfAnArray(myNumbers);

function getOddNumbersOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
        console.log(index, element);
    }
}
}

const myNumbers =[12, 23, 37, 44, 52, 71, 85, 98];
getOddNumbersOfAnArray(myNumbers);