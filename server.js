const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const app = express();

//Init Middleware - replaces body-parser
app.use(express.json({ extended: false }));

//Server static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

server.use(middlewares);
server.use(router);
server.listen(port);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
