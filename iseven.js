function isEven(number){
    var remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(202);
console.log(myNumber)
const myNumberODD = isEven(207);
console.log(myNumberODD)