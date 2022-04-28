// class Person {
//   // private 필드 정의
//   #name = '';

//   constructor(name) {
//     this.#name = name;
//   }

//   // name은 접근자 프로퍼티다.
//   get name() {
//     // private 필드를 참조하여 trim한 다음 반환한다.
//     return this.#name.trim();
//   }
// }

// const me = new Person(' Lee ');
// console.log(me.name); // Lee

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() { return 'eat'; }

  move() { return 'move'; }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() { return 'fly'; }
}

const bird = new Bird();

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly
