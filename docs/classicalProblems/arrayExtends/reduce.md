# reduce

模拟一个reduce方法

```js
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
```