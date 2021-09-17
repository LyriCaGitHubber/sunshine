import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

const API_KEY = process.env.MAPQUEST_API_KEY;

app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.send('Hello API!');
});

app.get('/api/geolocation', async (request, response) => {
  const latitude = request.query.latitude;
  const longitude = request.query.longitude;
  try {
    const geolocationString = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY}&location=${latitude},${longitude}`,
      {
        headers: {
          'accept-language': 'de-DE',
        },
      }
    );
    const data = await geolocationString.json();
    const city = {
      city: data.results[0].locations[0].adminArea5,
    };
    response.json(city);
  } catch (error) {
    console.error(error);
    response.status(500).send();
  }
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
