const reverseString = function(str) {
    let reversed = '';
    for(let i = -1; i > ((str.length) * -1)-1;i--){
        reversed += str.substr(i,1);
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
