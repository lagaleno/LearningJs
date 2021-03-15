let z = function() {
    console.log("Hello")
}
  
z()
  
let x = () => {
    console.log("Arrow function")
}
  
x()

//------

//testando passagem por valor e por referência

function arg(arr, num, obj) {
    arr[0] = 'oi'
    num = 999;
    obj[nome] = 'Arthur';
    obj[nome1] = 'Lara';
}
  
let obj = {
    sobrenome: 'galeno'
}
  
console.log(obj)
var nome, nome1; //nome e nome1 estão apontando para o mesmo lugar. 
let arr = [[1, 2, 3], [4, 5, 6]]
let num  = 7;
arg(arr, num, obj);
console.log(arr, num, obj[nome])

//------
var a={}, b={key:'b'}, c={key:'c'};

a[b]=123;
a[c]=456; //b e c vão apontar para o mesmo lugar

console.log(a);
  

