function func1(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {

        if(arr[i].length) {
            result = result.concat(func2(arr[i]))
        }

        else {
            result.push(arr[i])
        }
    
    }   

    return result;
}

function func2(arr) {
    let result = []

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length) { //if(Array.isArray(arr[i]))
            result = result.concat(func2(arr[i]))
        }

        else { 
            result.push(arr[i]) //base case
        }
    }

    return result;

}

let array = [1,[2,[3],4],[5, [6, [7], 8]]]
//let array = [1, 3, [2, 3]]
let a = func1(array);
console.log(a);