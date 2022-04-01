Array.prototype.myReduce = function (callback, first) {
    let index = first === undefined ? 1 : 0;
    let result = first === undefined ? this[0] : first;
    while (index < this.length) {
        result = callback(result, this[index])
        index += 1;
    }
    return result;
}


const arr = [1, 2, 3, 4, 5]
const a = arr.myReduce((prev, next) => {
    return prev + next
})

console.log(a)