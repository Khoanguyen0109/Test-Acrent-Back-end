import express from 'express';
import { rError } from './utils/response';
import cors from 'cors';
import bodyParser from 'body-parser';

import meal from './meal';
// import weight from './weight';
import exercise from './exercise';
import dairy from './diary';
import recommend from './recommend';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));

const routes = [meal, dairy, exercise, recommend];
for (let i = 0; i < routes.length; i++) {
  app.use('/api/1.0', routes[i]);
}

app.get('/', (req, res) => res.json({ 2323: 'asdsadas' }).status(200));

app.use((err, req, res, next) => {
  const { message, code, subcode, errorItems, error } = err;
  if (!code) {
    console.log(err);
  }
  return rError(
    res,
    code || 500,
    {
      message: message || 'Something went wrong!',
      subcode,
      errorItems,
    },
    error
  );
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
