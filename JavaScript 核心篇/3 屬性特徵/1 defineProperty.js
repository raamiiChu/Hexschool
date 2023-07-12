let person = {
    "a": 1,
    "b": 2,
    "c": 3
}

Object.defineProperties(person, {
    "a": {
        value: 4,
        writable: false
    },
    "b": {
        configurable: false
    },
    "c": {
        enumerable: false
    },
})

for (const key in person) {
    console.log(key);  // a b
}