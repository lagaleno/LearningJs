function sum(a, b) {
    
    if (b === undefined) { 
        return function (b) {
            return a+b;
        }
    }

    return a+b;
} 


console.log(sum(2, 3))
console.log(sum(2)(3))

//CLOSURE
//arguments => array de argumentos

let sumB = (a, b) => {
    a = Number(a);
    b = Number(b);
    r = (Number(a) + Number(b)).toString();

    if (r.indexOf('e')) {
        return 
    }

    return a + b;
}

console.log(sumB('la', '2'));