const express = require('express');
const morgan = require("morgan");
const Cors = require("cors");
const BodyParser = require("body-parser");
import Routes from "./api/routes"

// app.use((req, res, next) =>{
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

const App = express();
// const productRoutes = require("./api/routes/products");
// const ordersRoutes = require("./api/routes/orders");

App.use(Cors());
App.use(BodyParser.urlencoded({ extended: false }));

Routes(App);


App.use((req, res, next) => {
    res.status(404).send({ error: '404 - Not found' })
  })
  
const PORT = process.env.PORT || 5000
const hostname = '127.0.0.1';
App.listen(PORT, () => console.log(`Server running at http://${hostname}:${PORT}/`));