function quicksort(arr) {
    
    //caso base
    if (arr.length < 2) return arr

    let less = [];
    let greater = [];

    //choose the element in the middle
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr[pivotIndex];

    for (i in arr) {
        if(i != pivotIndex) arr[i] > pivot? greater.push(arr[i]): less.push(arr[i]);
    }

    return quicksort(less).concat(pivot).concat(greater)

    
}

let a = quicksort([3, 4, 6, 1, 2, 5])
console.log(a)