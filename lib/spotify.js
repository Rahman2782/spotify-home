import SpotifyWebApi from 'spotify-web-api-node'; //JS package that makes interacting with the spotify api easier

//scopes are 'permissions' for what we want spotify to do
const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played'
].join(' '); //spotify uses spaces, not commas for scopes
//.join combines all the scopes into one string seperate by a space

//so i can pass the params to the end of the LOGIN_URL
const params = { 
    scope: scopes,
};

const queryParamString = new URLSearchParams(params); 

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyAPI = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

export default spotifyAPI;

export { LOGIN_URL };
//this is a helper file that contains spotify api code