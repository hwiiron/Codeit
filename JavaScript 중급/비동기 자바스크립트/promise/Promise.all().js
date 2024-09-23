// async function printEmployees(id) {
//   const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
//   const data = await response.json();
//   console.log(data);
// }

// for (let i = 1; i < 11; i++) {
//   printEmployees(i);
// }



async function getEmployees(id) {
  const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await response.json();
  return data;
}

const promise = [];

for (let i = 1; i < 11; i++) {
  promise.push(getEmployees(i));
}

// const emplyees = await Promise.all(promise);
// console.log(emplyees);



let employees;

try {
  employees = await Promise.all(promise);
} catch (error) {
  console.log('Error');
}

console.log(employees);