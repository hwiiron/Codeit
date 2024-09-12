const title = 'hwichul';
const birth = 1998;
const job = '개발자';

const user = {
  title: title,
  birth: birth,
  job: job,

  // 프로퍼티 네임과 활용할 변수명이 같다면 코드 간결하게 사용 가능
  title,
  birth,
  job,
}



// 함수를 메소드로 만들때도 축약형 표기가 가능하다.
function getFullName() {
  return `${this.firstName} ${this.lastName}`
}

const user2 = {
  firstName: 'hwichul',
  lastName: 'shin',
  // getFullName: getFullName,

  getFullName,
}

const admin = {
  firstName: 'eunju',
  lastName: 'jeong',
  // getFullName: getFullName,

  getFullName,
}

console.log(user2.getFullName());
console.log(admin.getFullName());



const user3 = {
  firstName: 'hwichul',
  lastName: 'shin',
  // getFullName: function () {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  // 함수를 객체 내부에서 사용할 때 ': function ' 생략 가능
  getFullName2() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(user3.getFullName2());



// 프로퍼티 네임을 표현식으로 사용하는 법

// 계산된 속성명 (computed property name)
const user4 = {
  // [표현식]: 값,
};

const user5 = {
  ['hwichul'+'shin']: 'value',
};

console.log(user5);


// 변수에 담긴 값과 함수의 리턴 값으로 사용 가능
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '개발자',
};

console.log(codeit);