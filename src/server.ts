import express from 'express';

const api = express();

api.listen(3333, () => {
  console.log('Server listening on port 3333');
});

export default api;
