class Person {
  constructor(name = 'Anonymous'){
    this.name = name;
  };

  getGreeting() {
    return `Hi ${this.name}`;
  }
};

class Student extends Person {
  constructor(name, major='Undecided') {
    super(name);
    this.major = major;
  };  
};

const me = new Student('Brady', 'computer science');
console.log(me);

const notMe = new Student();
console.log(notMe);