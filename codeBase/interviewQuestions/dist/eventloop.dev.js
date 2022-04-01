"use strict";

// 请说出输出顺序并说明原因
function async1() {
  return regeneratorRuntime.async(function async1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('async1 start');
          _context.next = 3;
          return regeneratorRuntime.awrap(async2());

        case 3:
          console.log('async1 end');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function async2() {
  return regeneratorRuntime.async(function async2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('async2');

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');