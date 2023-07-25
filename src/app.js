import express from 'express';
import productRouter from './routes/product.router.js';
import errorHandler from './middlewares/error.js';

const app = express();

app.use(express.json()); 

app.use('/api/products', productRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Listening"));
