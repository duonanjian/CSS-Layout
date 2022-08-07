// // 手写Object.create函数
// Object.mycreate = function (proto, properties) {
//   function F() {}
//   F.prototype = proto;
//   const f = new F();
//   Object.defineProperties(f, properties);
//   return f;
// };
// // 生成对象
// var obj = Object.mycreate(
//   { a: 100 },
//   {
//     b: {
//       value: 2,
//       writable: true,
//       configurable: true,
//     },
//     c: {
//       get: function () {
//         return this.a + this.b;
//       },
//       set: function (val) {
//         this.b = val;
//       },
//       enumerable: true,
//       configurable: true,
//     },
//   }
// );
// obj.c = 10;
// console.log(obj);
// console.log(obj.__proto__);

// let view = document.querySelector('#view');

// let cb = () => {
//   let hash = location.hash || '#/home';
//   console.log(hash);
// };
// // window.addEventListener('hashchange', cb);
// window.onhashchange = cb
// window.addEventListener('load', cb);

const a = ['', '1', '3', '', '', '的', '话'];
let sss = a.reduce((a, b) => {
  if (a === '') {
    return '&nbsp' + b;
  }
  if (b === '') {
    return a + '&nbsp';
  }
  return a + b;
});
console.log(sss);
