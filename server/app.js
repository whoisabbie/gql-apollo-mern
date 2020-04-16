const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect(
    '***********************************************************************************************************************
***************************************************************************************',
    { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
    console.log('Connected to databse...');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`Started server, listening on port 4000...`);
})