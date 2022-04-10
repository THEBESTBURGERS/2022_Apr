// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this: ", this); // {value: 100, foo: ƒ}
//     // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
//     setTimeout(function () {
//       console.log("callback's this: ", this); // window
//       console.log("callback's this.value: ", this.value); // 1
//     }, 100);
//   }
// };

// obj.foo();




// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     // this 바인딩(obj)을 변수 that에 할당한다.
//     const that = this;

//     // 콜백 함수 내부에서 this 대신 that을 참조한다.
//     setTimeout(function () {
//       console.log(that.value); // 100
//     }, 100);
//   }
// };

// obj.foo();




// const person = {
//     name: 'Lee',
//     getName() {
//       // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
//       return this.name;
//     }
//   };
  
//   // 메서드 getName을 호출한 객체는 person이다.
//   console.log(person.getName()); // Lee

// const anotherPerson = {
//     name: 'Kim'
//   };
//   // getName 메서드를 anotherPerson 객체의 메서드로 할당
//   anotherPerson.getName = person.getName;
  
//   // getName 메서드를 호출한 객체는 anotherPerson이다.
//   console.log(anotherPerson.getName()); // Kim
//   console.log("test", anotherPerson.getName)
//   // getName 메서드를 변수에 할당
//   const getName = person.getName;
  
//   // getName 메서드를 일반 함수로 호출
//   console.log(getName()); // ''
//   // 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
//   // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
//   // Node.js 환경에서 this.name은 undefined다.

// // new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 즉, 일반적인 함수의 호출이다.
// const circle3 = Circle(15);

// // 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
// console.log(circle3); // undefined

// // 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
// console.log(radius); // 15

// function getThisBinding() {
//     console.log(arguments, typeof(arguments));
//     return this;
//   }
  
//   // this로 사용할 객체
//   const thisArg = { a: 1 };
  
//   // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
//   // apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
//   console.log(getThisBinding.apply(thisArg, [1, 2, 3]));

