// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }
// 	add(arr) {
// 		// this를 일단 회피시킨다.
// 		const that = this;
// 		return arr.map(function (item) {
// 			// this 대신 that을 참조한다.
// 			return that.prefix + ' ' + item;
// 		});
// 	}

//   // add(arr) {
//   //   // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
//   //   // ①
//   //   return arr.map(function (item) {
//   //     return this.prefix + item; // ②
//   //     // -> TypeError: Cannot read property 'prefix' of undefined
//   //   });
//   // }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// const x = 'hi';
// const y = function() {
// 	console.log(() => this.x);
// }
// y()

// // increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// // 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
// global.num = 3;
// const ttt = () => console.log("전역 테스트",this);
// ttt();
// const counter = {
//   num: 1,
// 	test : () => console.log("this : ", this),
//   increase: () => ++this.num
// };
// console.log(counter.test(3));
// console.log(counter.increase()); // NaN


// // Bad
// window.x = '보경';
// const person = {
//   name: 'Lee',
//   sayHi: () => console.log(`Hi ${this.x}`)
// };

// // sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
// // 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는
// // window.name과 같다. 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다.
// person.sayHi(); // Hi

const arr = [];

console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd('Array Performance Test');
// 약 340ms

const obj = {};

console.time('Object Performance Test');

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd('Object Performance Test');
// 약 600ms