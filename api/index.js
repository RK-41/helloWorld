/*
  04.11.

   Entry Point of the Backend

   06.11.
   User Registration Implementation

   07.11.
   User Login, Profile & Logout Implementation
*/

// const express = require('express');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Salt for Encryption and Authentication
const salt = bcrypt.genSaltSync(10);
const secret = 'adjfjadf0wejfojdcad2093sdakjajd';

const port = process.env.PORT || 4000;

// Creating Express App
const app = express();

// MIDDLEWARES
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// 'origin' is the host of the react app

app.use(express.json());
app.use(cookieParser());

// Connecting the MongoDB through Mongoose
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://admin:helloWorld@cluster0.ifrn8a0.mongodb.net/helloworld?retryWrites=true&w=majority'
		);

		console.log(`🍃MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(`💥Error: ${err.message}`);
		process.exit(1);
	}
};
connectDB();

// PROCESSING HTTP REQUESTS

// HOME PAGE
app.get('/', (req, res) => {
	res.json({
		message: 'home page',
	});
});

// USER REGISTRATION
app.post('/register', async (req, res) => {
	const { username, password } = req.body;

	try {
		// Creating a User Doc to Register the User
		const userDoc = await User.create({
			username,
			password: bcrypt.hashSync(password, salt),
		});
		console.log(userDoc);

		res.status(200).json({
			message: 'Success',
			userDoc,
		});
	} catch (error) {
		console.log(`💥💥UserDoc Error: ${error.message}`);
		res.status(400).json({
			message: 'Fail',
			error,
		});
	}
});

// USER LOGIN
app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	const userDoc = await User.findOne({ username });

	// Compairing Encrypted Password
	const passOk = bcrypt.compareSync(password, userDoc.password);

	if (passOk) {
		// Logged In
		jwt.sign({ username, id: userDoc._id }, secret, {}, (error, token) => {
			if (error) throw error;

			// res.json(token);
			res.cookie('token', token, { sameSite: 'none', secure: true }).json({
				id: userDoc._id,
				username,
			});
		});
	} else {
		res.status(400).json('Wrong Password!');
	}
});

// USER PROFILE
app.get('/profile', (req, res) => {
	console.log('🍪req.cookies: ', req.cookies);

	const { token } = req.cookies;

	jwt.verify(token, secret, {}, (err, info) => {
		if (err) {
			throw err;
		} else {
			res.json(info);
		}
	});
	res.json(req.cookies);

});

// USER LOGOUT
app.post('/logout', (req, res) => {
	res.cookie('token', '', { sameSite: 'none', secure: true }).json('ok');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
