const express = require('express')
const app = express()
// const port = 3000

// var Twitter = require('twitter');
var config = require('./config.js');

// var T = new Twitter(config); 

// var params = {
// q: '#boulder',
// result_type: 'recent',
// land: 'en',
// exclude: 'retweets',
// exclude: 'links',
// count: 10,

// } 

// T.get('search/tweets', params,searchedData); 

// function searchedData(err, data, response) {
// console.log(data);
// }

// const twitsModel = require('./db/models/twits')
// const controller = require('./controller')
// const bodyParser = require('body-parser')
const twitter = require('twitter'); 
// const config = require('./config') 
const client = new twitter(config); 
const http = require('http')
const port = 3000;
// const mongoConnection = require('./db/config/mongoConnection')

function sendTweet(req, res) {
  const params = {
     q: 'food truck', count: 3 
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
};


http.createServer(sendTweet).listen(port, console.log(`Listening on port ${port}`))



// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// LIKE ALL THE THINGS TWITTER BOT BELOW

// searchedData function is a callback function which 
// Set up your search parameters
// var params = {
//   q: '#nodejs',
//   count: 10,
//   result_type: 'recent',
//   lang: 'en'
// }

// // Initiate your search using the above paramaters
// T.get('search/tweets', params, function(err, data, response) {
//   // If there is no error, proceed
//   if(!err){
//     // Loop through the returned tweets
//     for(let i = 0; i < data.statuses.length; i++){
//       // Get the tweet Id from the returned data
//       let id = { id: data.statuses[i].id_str }
//       // Try to Favorite the selected Tweet
//       T.post('favorites/create', id, function(err, response){
//         // If the favorite fails, log the error message
//         if(err){
//           console.log(err[0].message);
//         }
//         // If the favorite is successful, log the url of the tweet
//         else{
//           let username = response.user.screen_name;
//           let tweetId = response.id_str;
//           console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
//         }
//       });
//     }
//   } else {
//     console.log(err);
//   }
// })
