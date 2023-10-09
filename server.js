const express = require('express');
require('dotenv').config();
const { connectDB } = require('./utils');
const { AuthRoute, PostRoute } = require('./routes');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/v1', AuthRoute);
app.use('/v1/post', PostRoute)

connectDB();
app.listen(PORT, () => console.log(`Server started running on ${PORT}`));