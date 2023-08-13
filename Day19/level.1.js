function outerFunction() {
    let outerVar = "I'm outer!";
    
    function innerFunction() {
        let innerVar = "I'm inner!";
        console.log(outerVar);
        console.log(innerVar);
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();
