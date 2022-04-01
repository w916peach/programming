# reduce

模拟一个reduce方法

```js
Array.prototype.myReduce = function (callback, first) {
    let index = first === undefined ? 1 : 0;
    let result = first === undefined ? this[0] : first;
    while (index < this.length) {
        result = callback(result, this[index])
        index += 1;
    }
    return result;
}
```