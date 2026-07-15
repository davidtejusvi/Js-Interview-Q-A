const binarySearch = (arr, target) => {
    //array should be sorted
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-4, 2, 4, 7, 9, 10], 10)) //index of 10 is 5
console.log(binarySearch([-4, 2, 4, 7, 9, 10], 4))//index of 4 is 2