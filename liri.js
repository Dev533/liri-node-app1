var dotenv = require("dotenv").config();
var Twitter = require('twitter');
var keys = require('./keys.js')
var Spotify = require('node-spotify-api')
var Request = require('request')


console.log(keys)


var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);

var operations = process.argv[2]


if(operations === "my-tweets"){
    myTweets();
}
else if (operations === "spotify-this-song") {
    spotifyThisSong()
}
else if (operations === "movie-this") {
    movieThis()
}
else if (operations === "do-what-it-says") {
    doWhatItSays()
}

// * `my-tweets`
function myTweets () {
    
}

// * `spotify-this-song`
function spotifyThisSong () {

}
// * `movie-this`
function movieThis() {
    Request("http://www.omdbapi.com/?t=" + process.argv[3] + "&apikey=40e9cece")
}

// * `do-what-it-says`
function doWhatItSays() {

}




