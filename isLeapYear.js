function isLeapYear(year){
    var remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}


const myYear = isLeapYear(1936);
console.log('my year:', myYear);