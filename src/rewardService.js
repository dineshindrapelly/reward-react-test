var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

var transactions =   [
  {id: 1, customer: "John", amount: 100, date: new Date(2019, 8, 7)},
  {id: 2, customer: "Mark", amount: 300, date: new Date()},
  {id: 3, customer: "Luc", amount: 100, date: new Date()},
  {id: 4, customer: "Paul", amount: 150, date: new Date(2019, 7, 10)},
  {id: 5, customer: "John", amount: 100, date: new Date()},
  {id: 6, customer: "Paul", amount: 50, date: new Date()},
  {id: 7, customer: "Paul", amount: 50, date: new Date('09/21/2019')},
  {id: 8, customer: "Alice", amount: 120, date: new Date(2019, 7, 15)},
  {id: 9, customer: "Alice", amount: 120, date: new Date(2019, 8, 5)}
];

mock.onGet('/api/transactions').reply(200, transactions);

