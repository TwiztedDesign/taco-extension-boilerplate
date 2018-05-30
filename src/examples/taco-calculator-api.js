let tacoCalculatorApi = {

    add         : function(a,b){
        return "Taco add result: " + (a + b);
    },
    subtract    : function(a,b){
        return "Taco subtract result: " + (a - b);
    },
    multiply    : function(a,b){
        return "Taco multiply result: " + (a * b);
    },
    divide      : function (a,b) {
        return "Taco divide result: " + (a / b);
    }

};


window.taco.extend("calc", tacoCalculatorApi);