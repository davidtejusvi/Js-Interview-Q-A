// find the common key value pair in the given objects

const findCommonKeyValue = (obj1, obj2) => {
    const commonKeys = {};
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            commonKeys[key] = obj1[key];

        }
    }
    return commonKeys;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, d: 5 };
console.log(findCommonKeyValue(obj1, obj2)); // { b: 2 }