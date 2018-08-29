import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(staticFiles);

// now we can set the route path & initialize the API
router.get('/cidades', (req, res) => {
  const cities = [
    {name: 'Sao Paulo',      population: 22000000},
    {name: 'Rio de Janeiro', population: 8000000},
    {name: 'Curitiba',       population: 3000000}
  ];

  res.json(cities);
});

// Use our router configuration when we call /api
app.use('/api', router);

app.use(router);

app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
})