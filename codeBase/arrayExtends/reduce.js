Array.prototype.myReduce = function (callback, first) {
    const hasSecondParam = first !== undefined // 是否有第二个参数
    let index = hasSecondParam ? 0 : 1; // 第二个参数存在那么从索引0开始遍历，第二个参数不存在从所以1开始遍历
    let result = hasSecondParam ? first : this[0]; // 第二个参数存在,那么callback 第一次调用的时候接收first和this[0],如果不存在第一次调用callback接收this[0]和this[1]
    while (index < this.length) {
        result = callback(result, this[index])
        index += 1;
    }
    return result;
}
// 测试
const arr = [1, 2, 3, 4, 5]
// 接收一个参数
const res = arr.myReduce((prev, next) => {
    return prev + next
})
console.log(res) // 15

// 接收两个参数
const res1 = arr.myReduce((prev, next) => prev + next, 1)
console.log(res1) // 16