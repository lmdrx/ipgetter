// App is an invoked instance of express
const app = require('express')();
let $port = 3000;

// All request to root folder return a JSON msg with the client ip
app.get('/', (req, res) => {
  return res.status(200).json({
    ip: `${ req.headers['x-forwarded-for'] || req.ip }`,
  });
});

// Get a listening port from the env, or set at 3000
app.listen((process.env.PORT || $port), () => {
  console.log('App is up and listening!',
    `Port: ${(process.env.PORT || $port)}`);
});

