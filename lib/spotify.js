import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-library-modify'
].join(' '); //spotify uses spaces, not commas for scopes

const params = {
    scope: scopes,
};