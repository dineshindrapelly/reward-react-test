import axios from 'axios';

export const transactionsService = {
    getAll
};

function getAll() {
  return axios.get('/api/transactions');
}