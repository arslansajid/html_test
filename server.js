const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// const express = require('express');
// const path = require('path');

// const port = process.env.PORT || 8080;
// const app = express();

// // the __dirname is the current directory from where the script is running
// // app.use(express.static(__dirname));
// app.use(express.static(__dirname + '/build'));
// console.log('__dirname', __dirname)

// // send the user to index html page inspite of the url
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/build/index.html'));
// });

// // app.listen(port);
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))