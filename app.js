const express = require('express')
const app = express()
var config = require('./config.js');

const twitter = require('twitter'); 
const client = new twitter(config); 
const http = require('http')
const port = 3000;


  app.get('/mytweeters', function(req, res) {

   const params = {
      q: '#flatironfoodtrucks', 
      count: 3,
      result_type: 'recent',
      lang: 'en'
   } 

   client.get('search/tweets', params, function(error, tweets, response){

    if(error) {
      console.log("Error getting tweets");
      return;
   }
   
   console.log(tweets);
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end(JSON.stringify(tweets)); // This line sends the tweets to the client making the http request.
   });
});

  app.get('/byhandle', function(req, res) {

   client.get('statuses/user_timeline', { screen_name: 'katyperry', count: 20 }, function(error, tweets, response){

    if(error) {
      console.log("Error getting tweets");
      return;
   }
   
   console.log(tweets);
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end(JSON.stringify(tweets)); // This line sends the tweets to the client making the http request.
   });
});



app.listen(port, console.log(`Listening on port ${port}`))

// var express = require('express');
// var Twitter = require('twitter');

// var router = express.Router(); 
// var client = new Twitter({
//   consumer_key: 'nqDtAXf25fgxCshhkzgLHErjI',
//   consumer_secret: 'azJBib62eUvrugbua9CBWAzFafc7T4zPQ8Ec36LkIVRDlocIfz',
//   access_token_key: '1003472688289968138-wBBRPUIPVgJKEZz6vh1f46MIPHI9K9',
//   access_token_secret: 'eIl5GvQQcR20qvCKR1UHtoXLbBCxWw0Wt3xKMTjQuE4wd'
// });

// router.get('/', function(req, res, next) {
//   // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
//   client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
//     if (!error) {
//       res.status(200).render('index', { title: 'Express', tweets: tweets });
//     }
//     else {
//       res.status(500).json({ error: error });
//     }
//   });
// });

// module.exports = router;

// TESTING EXPRESSS ROUTES

// router.get('/', function(req, res, next) {
//   // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
//   client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
//     if (!error) {
//       res.status(200).render('index', { title: 'Express', tweets: tweets });
//     }
//     else {
//       res.status(500).json({ error: error });
//     }
//   });
// });