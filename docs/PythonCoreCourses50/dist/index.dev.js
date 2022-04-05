"use strict";

var https = require('https');

var fs = require('fs');

var res = require('./res.json');

var delay = function delay(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

var imgReg = /<img\ssrc=".*".*>/g;
var cReg = /!\[.*\](.*)/g;

var writeImg = function writeImg(item) {
  return https.get(item.url, function (res) {
    var buf = Buffer.alloc(0);
    res.on('data', function (chunk) {
      buf = Buffer.concat([buf, chunk]);
    });
    res.on('end', function () {
      fs.writeFileSync("./imgs/".concat(item.name), buf);
    });
  });
};

var downloadImgs = function downloadImgs() {
  var i;
  return regeneratorRuntime.async(function downloadImgs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < res.length)) {
            _context.next = 8;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(delay(2000));

        case 4:
          writeImg(res[i]);

        case 5:
          i += 1;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var replaceImgPath = function replaceImgPath() {
  var md = fs.readFileSync('./README.md', 'utf-8');
  md = md.replace(imgReg, function (content) {
    var start = content.indexOf('h');
    var end = content.indexOf('.png') + 4;
    var cur = content.slice(start, end);
    var name = cur.split('/').pop();
    return content.replace(cur, "./imgs/".concat(name));
  });
  md = md.replace(cReg, function (content) {
    var start = content.indexOf('h');
    var end = content.lastIndexOf(')');
    var cur = content.slice(start, end);
    var name = cur.split('/').pop();
    return content.replace(cur, "./imgs/".concat(name));
  });
  fs.writeFileSync('./README.md', md);
};