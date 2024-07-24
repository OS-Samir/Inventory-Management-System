const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./Config/connection");
const UserModel = require("./model/User");
const cors = require('cors');
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
origin: 'http://localhost:5173',
methods: ['GET', '`POST', 'PUT', 'DELETE', 'OPTIONS'],
credentials: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    connectionDB()

})

app.post('/Register', (req, res) => {
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})