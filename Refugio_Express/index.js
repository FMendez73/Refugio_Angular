const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const routerRefugio=require('./routes/refugio');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.use('/api/v1/refugio',routerTaqueria);
app.listen(port, () => {
  console.log('Mi port:' +  port);
});
