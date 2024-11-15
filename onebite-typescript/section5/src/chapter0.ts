/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "신휘철",
  // age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "정은주";
person.sayHi();
person.sayHi(1, 2);
