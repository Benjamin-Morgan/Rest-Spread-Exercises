// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//refactored ES2015 version
const filterOutOdds = (...args) => args.filter(value => value % 2 === 0);

//findMin
const findMin = (...smallestArg) => Math.min(...smallestArg);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(value => value * 2)];

//slice and dice
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (arr1, arr2) => { return [...arr1, ...arr2] };

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key]
    return newObj
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) => {
    let newObj = { ...obj1, ...obj2 }
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}