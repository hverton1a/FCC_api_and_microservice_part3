var mongoose = require('mongoose');

mongoose.connection.close(process.env.MONGO_URI);
mongoose.connection.close();
mongoose.connection.close();
mongoose.connection.close();