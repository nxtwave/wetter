const express = require('express');
const router = express.Router();

const http = require('http');

const appid = process.env.OPEN_WEATHER_KEY;

/**
 * Get Weather
 */
router.get('/weather', function(req, res) {

  let options = {
    hostname: 'api.openweathermap.org',
    path: `/data/2.5/weather?units=imperial&zip=${req.query.zipcode}&APPID=${appid}`
  };

  http.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (d) => {
      res.write(d, 'utf8');
    });

    response.on('end', () => {
      res.end();
    });

  }).on('error', (e) => {
    console.error('error', e);
    res.json(e);
  });

});

module.exports = router;

