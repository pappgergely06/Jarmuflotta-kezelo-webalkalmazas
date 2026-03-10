const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { testQuery } = require('./db');

const app = express();
const port = process.env.PORT || 5000;

BigInt.prototype.toJSON = function() {
    return this.toString();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

testQuery();

app.listen(port, async () => {
    console.log(`A szerver fut az ${port} porton!`);
})