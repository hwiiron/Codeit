// 모듈 파일의 조건
export const title = "시니철";

export function print(value) {
  console.log(value);
}

// 각각의 선언문 앞에 export라는 키워드를 붙여주면 다른 파일에서도 사용할 수 있게 된다.
// export를 해서 모든 파일에서 제한없이 사용되는 것이 아니라 변수나 함수를 사용하려고 하는 파일에서 모듈 문법으로 불러오는 과정을 거쳐야 사용이 가능하다.