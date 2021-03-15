function rightRotation(arr, num) {
    var finalArr = [];
    for(let j = 0; j < num; j++) {
        (function doesRotation() {
            var temp = []
            var last = arr[arr.length-1]
        
            temp.push(last)
        
            for(let i = 0; i < arr.length-1; i++) {
                temp.push(arr[i]);
            }

            arr = temp;
        
        }())
    }

    return arr;
}

function doesRotation(arr) {
    var finalArr = []
    var last = arr[arr.length-1]

    finalArr.push(last)

    for(let i = 0; i < arr.length-1; i++) {
        finalArr.push(arr[i]);
    }

    return finalArr;
}


let arr = [2, 3, 4, 5, 7]
let num_rotation = 3;

arr = rightRotation(arr, num_rotation);


console.log(arr);