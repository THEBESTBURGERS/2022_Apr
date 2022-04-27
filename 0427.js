// const obj = {
//   x: 1,
//   // foo는 메서드이다.
//   foo() { return this.x; },
//   // bar에 바인딩된 함수는 메서드가 아닌 일반 함수이다.
//   bar: function() { return this.x; }
// };

// console.log(obj.foo()); // 1
// console.log(obj.bar()); // 1


const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
  // sayHi의 [[HomeObject]]는 sayHi가 바인딩된 객체인 derived를 가리키고
  // super는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?