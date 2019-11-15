require('http').createServer((req, res) => {
  res.statusCode = 301;
  res.setHeader('Location', `https://${req.headers.host}${req.url}`);
  res.end();
}).listen(3000, () => console.log(`Server running...`));
