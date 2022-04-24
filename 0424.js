// class Person {
//   // 생성자
//   constructor(name) {
//     // 인스턴스 생성 및 초기화
//     this.name = name;
//   }

//   // 프로토타입 메서드
//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// const me = new Person('Lee');
// me.sayHi(); // Hi! My name is Lee


// // 정적 메서드는 클래스로 호출한다.
// // 정적 메서드는 인스턴스 없이도 호출할 수 있다.
// Person.sayHi(); // Hi!

// // 인스턴스 생성
// const me = new Person('Lee');
// me.sayHi(); // TypeError: me.sayHi is not a function



// const person = {
//   // 데이터 프로퍼티
//   firstName: 'Ungmo',
//   lastName: 'Lee',

//   // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//   // getter 함수
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // setter 함수
//   set fullName(name) {
//     // 배열 디스트럭처링 할당: "36.1. 배열 디스트럭처링 할당" 참고
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(`${person.firstName} ${person.lastName}`); // Ungmo Lee

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
// person.fullName = 'Heegun Lee';
// console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
// console.log(person.fullName); // Heegun Lee

// // fullName은 접근자 프로퍼티다.
// // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
// console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// // {get: ƒ, set: ƒ, enumerable: true, configurable: true}

