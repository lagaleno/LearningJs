function addFrist(arr, el) {
    arr.splice(0, 0, el);
} 

var addLast = (arr, el) => {
    console.log(arr, el)
    arr.push(el);
}

let list1 = [2, 3, 4, 5]
addFrist(list1, 1)
console.log(list1)
let list2 = [1, 2, 3, 4]
addLast(list2, 5);
console.log(list2)


funcArr = [
    function sum(a, b) { return a+b; }, 
    function log() { console.log(this) }
];

console.log(funcArr[0](4, 3));
funcArr[1]();


