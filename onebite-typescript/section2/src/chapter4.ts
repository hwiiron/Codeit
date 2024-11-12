// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "신휘철",
  nickname: "hwiiron",
  birth: "1998.11.06",
  bio: "안녕하세요.",
  location: "김포시",
};

let user2: User = {
  id: 1,
  name: "정은주",
  nickname: "lingu",
  birth: "1996.12.20",
  bio: "안녕하세요.",
  location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;

  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
