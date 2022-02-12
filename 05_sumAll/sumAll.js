const sumAll = function(first, second) {
    if (first < 0 || second < 0){
        return 'ERROR'
    }
    if (typeof first !== 'number' || typeof second !== 'number' ){
        return 'ERROR'
    }
    if (first>second){
        return sumAll(second,first)
    }
    let sum = 0;
    for (let i = first; i<=second; i++) {
        sum += i;
    };
    return sum
};

let x = 7
console.log(typeof x == 'number')

// console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
