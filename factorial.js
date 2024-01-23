//function calcFactorial(n){
    function factorial(n){
        if (n===0 || n===1){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
    }
    //console.log(factorial(n));
//    }
//console.log(factorial(6));

module.exports = factorial;