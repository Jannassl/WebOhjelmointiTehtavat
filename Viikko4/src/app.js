'use strict'
import express from 'express';
import api from './api/index.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat',(req,res) => {
  const cat = {
    cat_id: 1,
    name: 'Viski',
    birthdate: '2001-02-01',
    weight: 12,
    owner: 3,
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});
app.use('/api/v1', api);
export default app;