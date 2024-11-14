const age = 96;

function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return "Hello";
}

const KrAge = calculateKrAge(age);

console.log(KrAge);


//calculator with return
const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    times: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
};

//depending codes
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
