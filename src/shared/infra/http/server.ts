import bodyParser from 'body-parser';
import express from 'express';
import { router } from './api';

const app = express();
const port = 4000;

export class HttpServer {
  start() {
    app.get('/', (req, res) => {
      res.send('Welcome to the API v1.0');
    });

    app.use(express.json());

    app.use('/api', router);

    app.listen(port, () => {
      console.log(
        `The application is listening on port http://localhost:${port}`
      );
    });
  }
}
