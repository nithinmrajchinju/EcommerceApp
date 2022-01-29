const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./server/database/database')();

app.use('/api/v1/customer', require('./server/router/customerRouter'));
app.use('/api/v1/user', require('./server/router/userRouter'));
app.use('/api/v1/product', require('./server/router/productRouter'));
app.use('/api/v1/banner', require('./server/router/bannerRouter'));
app.use('/api/v1/category', require('./server/router/categoryRouter'));
app.use('/api/v1/cart', require('./server/router/cartRouter'));
app.use('/api/v1/promotion', require('./server/router/promotionRouter'));
app.use('/api/v1/order', require('./server/router/orderRouter'));
app.use('/api/v1/admin', require('./server/router/adminRouter'));
app.use('/api/v1/report', require('./server/router/reportRouter'));
app.use('/api/v1/review', require('./server/router/reviewRouter'));

app.listen(3000, () => console.log('server started on  port http://localhost:3000'))