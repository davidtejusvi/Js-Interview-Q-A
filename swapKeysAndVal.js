const swapKeysAndVal = (obj) => {
    const swappedObj = {};
    for (const [key, value] of Object.entries(obj)) {
        swappedObj[value] = key;
    }
    return swappedObj;
}

console.log(swapKeysAndVal({ a: 1, b: 2 })); // { 1: 'a', 2: 'b' }