import { getEmployees, json, groupEmployees } from './functions.js'

// getEmployees((response) => console.log(response));

// json('[{ "id": 1, "name": "Jason", "email": "jason@codeitmall.kr", "department": "engineering" }, { "id": 2, "name": "Alice", "email": "alice@codeitmall.kr", "department": "engineering" }, { "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }, { "id": 4, "name": "Erica", "email": "erica@codeitmall.kr", "department": "marketing" }, { "id": 5, "name": "Wilson", "email": "wilson@codeitmall.kr", "department": "sales" }]', (data) => console.log(data));

// groupEmployees([
//   {
//     id: 1,
//     name: 'Jason',
//     email: 'jason@codeitmall.kr',
//     department: 'engineering'
//   },
//   {
//     id: 2,
//     name: 'Alice',
//     email: 'alice@codeitmall.kr',
//     department: 'engineering'
//   },
//   {
//     id: 3,
//     name: 'Brian',
//     email: 'brian@codeitmall.kr',
//     department: 'marketing'
//   },
//   {
//     id: 4,
//     name: 'Erica',
//     email: 'erica@codeitmall.kr',
//     department: 'marketing'
//   },
//   {
//     id: 5,
//     name: 'Wilson',
//     email: 'wilson@codeitmall.kr',
//     department: 'sales'
//   }
// ], (results) => console.log(results));



getEmployees((response) => {
  json(response, (data) => {
    // console.log(data);
    groupEmployees(data, (results) => console.log(results))
  })
})