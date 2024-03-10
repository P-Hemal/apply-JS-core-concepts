function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);

    }
    return sum;
}
// const myNumbers =[12, 23, 37, 44, 52, 71, 85, 98];
// getSumOfAnArray(myNumbers);

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbers = [12, 23, 37, 44, 52, 71, 85, 98];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum:', oddNumberSum);