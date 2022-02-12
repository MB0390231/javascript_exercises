const removeFromArray = function(listToRemove, ...allArgs) {
    let copy = listToRemove
    for(let i = 0; i < copy.length; i++){
        if (allArgs.includes(copy[i])){
            console.log(copy[i])
            copy.splice(i,1)
            i-=1
        }
    }
    return copy
};
// Do not edit below this line
module.exports = removeFromArray;
