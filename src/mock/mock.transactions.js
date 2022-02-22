var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

var transactions =   [
  {id: 1, customer: "Customer 1", amount: 100, date: new Date(2019, 8, 7)},
  {id: 2, customer: "Customer 2", amount: 300, date: new Date()},
  {id: 3, customer: "Customer 3", amount: 100, date: new Date()},
  {id: 4, customer: "Customer 4", amount: 150, date: new Date(2019, 7, 10)},
  {id: 5, customer: "Customer 5", amount: 100, date: new Date()},
  {id: 6, customer: "Customer 6", amount: 50, date: new Date()},
  {id: 7, customer: "Customer 7", amount: 50, date: new Date('09/21/2019')},
  {id: 8, customer: "Customer 8", amount: 120, date: new Date(2019, 7, 15)},
  {id: 9, customer: "Customer 9", amount: 120, date: new Date(2019, 8, 5)}
];

mock.onGet('/api/transactions').reply(200, transactions);

