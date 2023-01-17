const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(a+b)
        }, 100)
    })
}

//2

var count=0;

const asyncAddNotSpecifiedNumberOfArgs = async (...nums) => {
    let sum = 0;
    for (const num in nums) {
        sum = await asyncAdd(sum, num);
        count++;
    }
    alert(`amount of async operations ${counter}`)
    return sum
}

//4
//-----------------------------------

//3
const measureTime = (func) => {
    const start = performance.now();
    func();
    const end = performance.now();
    return end - start;
}

const numbers = [];

for(var i =0;i<=100;i++) {
    numbers.push(Math.floor(Math.random() * 100))
}

const time = measureTime(async () => {
    return await asyncAddNotSpecifiedNumberOfArgs(...numbers);
});

alert(`time: ${time}`);
alert(`count: ${count}`);
