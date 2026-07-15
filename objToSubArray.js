const objToSubArray = (obj) => {
    // const key = Object.keys(obj);
    // const value = Object.values(obj);
    // return [key, value];
    return [Object.keys(obj), Object.values(obj)];
}

console.log(objToSubArray({ a: 1, b: 2 })); // [['a', 'b'], [1, 2]]s