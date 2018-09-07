const users = require('express').Router();

const all = require('./all');
const single = require('./single');

users.get('/', all);
users.get('/:userId', single);

module.exports = users;