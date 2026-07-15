const binarySearchRecursive = (arr, target) => {
    //recursive method calling same function until get the result
    return search(arr, target, 0, arr.length - 1);
}

const search = (arr, target, left, right) => {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        //recursive method calling same function until get the result
        return search(arr, target, left, mid - 1)
    } else {
        //recursive method calling same function until get the result
        return search(arr, target, mid + 1, right);
    }
}

console.log(binarySearchRecursive([-4, 2, 4, 7, 9, 10], 10)) //index of 10 is 5
console.log(binarySearchRecursive([-4, 2, 4, 7, 9, 10], 4))//index of 4 is 2