import express from 'express';
import productRouter from './routes/product.router.js';
import errorHandler from './middlewares/error.js';
import attachLogger from './middlewares/logger.js';

const app = express();

app.use(attachLogger);

app.use(express.json()); 

app.use('/api/products', productRouter);

app.get('/loggerTest', (req, res) => {
    req.logger.debug('Este es un mensaje de debug');
    req.logger.http('Este es un mensaje de http');
    req.logger.info('Este es un mensaje de info');
    req.logger.warning('Este es un mensaje de warning');
    req.logger.error('Este es un mensaje de error');
    req.logger.fatal('Este es un mensaje de fatal');
  
    return res.send('Prueba de logs realizada.');
  });

app.use(errorHandler);

app.listen(8080, () => console.log("Listening"));
