const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const dbConnect = require('./config/dbconnect');
const initRoutes = require('./routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8888;

// Cấu hình body-parser để hỗ trợ các kích thước dữ liệu lớn (ở đây là 50MB)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);

app.listen(port, () => {
    console.log('Server running on the port: ' + port);
});
