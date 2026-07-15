const mergeAndSum = (obj1, obj2) => {
    let res = { ...obj1 };
    for (const key in obj2) {
        res[key] = res[key] ? res[key] + obj2[key] : obj2[key];
    }
    return res;
}

console.log(mergeAndSum({ a: 1, b: 2 }, { a: 2, c: 3, d: 5 })); // { a: 3, b: 2, c: 3 ,d: 5}