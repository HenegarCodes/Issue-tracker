const jwt = require('jsonwebtoken');
const {GraphQLError} = require('graphql');

const secret = "secretKEY";

const expiration = '2h'