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

app.post('/api/v1/user', (req, res) => {
  const user = req.body;

  res.status(201).json({ message: 'User created', user });
});

app.put('/api/v1/user/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;

  res.status(200).json({ message: 'User updated', user });
});

app.delete('/api/v1/user/:id', (req, res) => {
  const id = req.params.id;

  // TODO: Add code here to delete the user from the database using the id

  // Send a response indicating that the user was deleted
  res.status(200).json({ message: 'User deleted', id });
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
