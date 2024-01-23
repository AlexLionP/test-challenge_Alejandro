function calcFactorial(n){
    //let n = prompt("Dime un número natural ");
    function factorial(n){
        if (n===0 || n===1){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
    }
    console.log(factorial(n));
    }
calcFactorial(6);