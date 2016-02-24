var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(serve(__dirname + '/dist'));

app.listen(8080);

console.log('listening on port 8080');