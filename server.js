const express = require('express');
const path = require('path');

const app = express();

//Connect Database
connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
