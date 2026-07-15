const hasOnlyNumericVal = (obj) => {
    for (const val of Object.values(obj)) {
        if (typeof val !== 'number' || isNaN(val)) return false;
    }
    return true;
}

console.log(hasOnlyNumericVal({ a: 1, b: 2 })); // true
console.log(hasOnlyNumericVal({ a: 1, b: '2' })); // false
console.log(hasOnlyNumericVal({ a: 1, b: NaN, c: 3 })); // false