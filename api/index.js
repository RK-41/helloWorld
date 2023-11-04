/*
  04.11.

   Entry Point of the Backend
*/

// const express = require('express');
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		message: 'home page',
	});
});
app.post('/register', (req, res) => {
	const { username, password } = req.body;
	res.json({
		requestData: { username, password },
	});
});

app.listen(4000);
