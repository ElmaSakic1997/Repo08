// Write code below this line
function functionPrintInfo(name, age) {
   
    return {
        name,
        age
    };
}

console.log(functionPrintInfo("John", 23));
console.log(functionPrintInfo("Michael", 23));
// Write code above this line

module.exports = functionPrintInfo;