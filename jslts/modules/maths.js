const PI = 3.14;
function add(num1, num2){
    return num1 + num2 ;
}
function div(num1, num2){
    if(num2 === 0) return 'Can\'t divided by zero';
    else return num1 / num2;
}
//Property Shorthand
module.exports = { PI, add , div};
// module.exports = { PI: PI, add: add, div: div };
