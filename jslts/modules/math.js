function add(num1, num2){
    return num1 + num2 ;
}
function div(num1, num2){
    if(num2 === 0) return 'Can\'t divided by zero';
    else return num1 / num2;
}
// let div to use in other js files
module.exports = div ;
