fetch('https://learn.codeit.krrrr/api/employees')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log('Error!'))
.finally(() => console.log('Finished'));