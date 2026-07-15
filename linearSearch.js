const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([-5, 2, 5, 10, 3, 4], 5)) // index of target 5 is 2
console.log(linearSearch([-5, 2, 5, 10, 3, 4], -10)) // index of target -10 is -1
console.log(linearSearch([-5, 2, 5, 10, 3, 4], 4)) // index of target 4 is 5