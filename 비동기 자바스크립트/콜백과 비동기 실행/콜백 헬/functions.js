export function getEmployees(callback) {
  console.log('Sending request...');
  const response = `[{ "id": 1, "name": "Jason", "email": "jason@codeitmall.kr", "department": "engineering" }, { "id": 2, "name": "Alice", "email": "alice@codeitmall.kr", "department": "engineering" }, { "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }, { "id": 4, "name": "Erica", "email": "erica@codeitmall.kr", "department": "marketing" }, { "id": 5, "name": "Wilson", "email": "wilson@codeitmall.kr", "department": "sales" }]`;
  setTimeout(() => callback(response), 1000);
}

export function json(string, callback) {
  console.log('Parsing string...');
  const json = JSON.parse(string);
  setTimeout(() => callback(json), 1000);
}

export function groupEmployees(employees, callback) {
  console.log('Grouping employees...');
  const res = {};
  employees.forEach((employee) => {
    const { name, department } = employee;
    if (!(department in res)) {
      res[department] = [];
    }
    res[department].push(name);
  });
  setTimeout(() => callback(res), 1000);
}
