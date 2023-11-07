/*
  06.11.23

  User DB Model
*/

import mongoose from 'mongoose';

// const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 4,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
