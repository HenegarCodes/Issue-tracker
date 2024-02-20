const { connect, connection } = require('mongoose');
const mongoose = require('mongoose');
 



mongoose.connect(
  process.env.MONGODB_URI || 'spencer:gZA5lyO3iJ9mTXqX@issue-tracker.2efqg1v.mongodb.net/?retryWrites=true&w=majority'
);


module.exports = mongoose.connection;
