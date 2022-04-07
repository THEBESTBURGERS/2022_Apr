//   // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   // {a: 1}
  
//   // call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
//   console.log(getThisBinding.call(thisArg, 1, 2, 3));
//   // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   // {a: 1}


// function convertArgsToArray() {
//   console.log("1", arguments);

//   // arguments 객체를 배열로 변환
//   // Array.prototype.slice를 인수없이 호출하면 배열의 복사본을 생성한다.
//   const arr = Array.prototype.slice.call(arguments);
//   // const arr = Array.prototype.slice.apply(arguments);
//   console.log("2", arr);

//   return arr;
// }

// convertArgsToArray(1, 2, 3); // [1, 2, 3]


// function getThisBinding() {
//     //this = "1"
//     console.log("호출되었습니다");
//     return this;
//   }
  
//   // this로 사용할 객체
//   const thisArg = { a: 1 };
  
//   // bind 메서드는 첫 번째 인수로 전달한 thisArg로 this 바인딩이 교체된
//   // getThisBinding 함수를 새롭게 생성해 반환한다.
//   console.log(getThisBinding.bind(thisArg)); // getThisBinding
//   // bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
//     console.log(getThisBinding.bind(thisArg)()); // {a: 1}
//     console.log(getThisBinding.this)


var name = "보경"
const person = {
    name: 'Lee',
    foo(callback) {
      // ①
    
      setTimeout(callback, 100);
      console.log("test");
    }
  };
  
  person.foo(function () {
    console.log(`Hi! my name is ${this.name}.`); // ② Hi! my name is .
    // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
    // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
    // Node.js 환경에서 this.name은 undefined다.
  });