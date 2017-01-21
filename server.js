'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: './public'})
});
app.listen(PORT, function(){
  console.log('Server is up and running on port 4000 and can be accessed at local host 4000 in your browser');
})
