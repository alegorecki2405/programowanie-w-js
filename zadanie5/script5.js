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

const asyncAddNotSpecifiedNumberOfArgs = async (...nums) => {
    let sum = 0
    for (const num in nums) {
        sum = await asyncAdd(sum,num);
    }
    return sum
}

//3
//-----------------------------------