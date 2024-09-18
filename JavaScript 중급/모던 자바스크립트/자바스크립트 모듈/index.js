// 자바스크립트 모듈

// 하나의 파일에 많은 코드를 작성하게 되면 각 코드를 이해하는데 어렵고, 기능 수정이 필요할 때 그 부분을 찾기 쉽지 않기 때문에
// 하나의 파일에 관리하는 것이 아닌, 기능별로 여러 개의 파일로 분리해서 관리하는 것을 모듈화라고 한다.

// 자바스크립트 모듈화는 코드를 효율적으로 관리할 수 있고, 다른 프로그램에서 재사용이 가능하다는 장점이 있다.

import { title as subTitle, print } from "./printer.js";
import { 
  title as memberstitle,
  data as membersData,
} from "./members.js";

// 가장 위쪽에 import 키워드를 쓰고 현재 파일에서 사용할 변수나 함수명을 쉼표로 구분해서 적고 from 키워드와 모듈 파일의 경로를 적어주면
// export한 파일의 변수와 함수를 사용할 수 있다.


// 모듈 파일에서 사용하고 있는 변수명을 현재 파일에서 사용해야 할 때
// as 키워드를 통해 이름을 변경해서 사용할 수 있다.
// as 키워드를 기준으로 왼쪽에 export한 변수, 함수명이고 오른쪽에 새로운 변수, 함수명을 적어주면 된다.
const title = "은주";


print(title);
print(members);



// 와일드카드 문자(Wildcard Character)
// 힌꺼번에 import하는 방법
// import 다음 '*'을 붙여주고 as 키워드 다음에 새로운 이름을 붙여주면 printer.js에서 export한 모든 대상이 
// 새로운 이름에 전달이 됩니다.
import * as printerJS from "./printer.js";

// 사용 방법은 객체 형식으로 사용 가능하다.
// import할 때 *를 활용하면 모듈 파일에서 변수나 함수를 가지고 올 때 간결하게 가져올 수 있고
// 프로퍼티 형식으로 값을 불러오기 때문에 이름이 중복될 경우가 없다.
// 하지만 필요 없는 대상들도 모두 불러오기 때문에 효율적이지 못하다.
console.log(printerJS.title);
printerJS.print(memberstitle);
printerJS.print(membersData);



// default 키워드로 export된 값은 import를 할 때도 
// default로 구분이 되는데 as 키워드를 통해 이름을 붙여주고 사용이 가능하다.
import {
  default as defaultTitle,
  title as subTitle,
  print
} from "./printer.js";

// default 문법은 import할 때 default as를 생략하고 default 값에 붙여줄 이름을 중괄호 밖으로 빼낼 수 있다.
import defaultTitle, {
  title as subTitle,
  print
} from "./printer.js";