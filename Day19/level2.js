function outerFunction() {
    let outerVar = "I'm outer!";
    
    function innerFunction1() {
        console.log(outerVar);
    }

    function innerFunction2() {
        let innerVar = "I'm inner 2!";
        console.log(outerVar);
        console.log(innerVar);
    }

    function innerFunction3() {
        console.log("This is inner 3!");
    }

    return {
        func1: innerFunction1,
        func2: innerFunction2,
        func3: innerFunction3
    };
}

const closureFunc = outerFunction();
closureFunc.func1();
closureFunc.func2();
closureFunc.func3();
