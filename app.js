const express = require('express');
const app = express();

// app.use((req, res, next) =>{
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

app.use('/products/:idProducts', productRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;