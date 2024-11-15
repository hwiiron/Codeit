/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123132,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

const developerUser: User = {
  name: "정은주",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User = {
  name: "신휘철",
  profile: {
    type: "student",
    school: "코드잇",
  },
};
