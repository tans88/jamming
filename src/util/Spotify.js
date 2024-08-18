const CLIENT_ID = '05aeb2be6cf54fed86ee4b4aa793e116';
const REDIRECT_URI = 'http://localhost:3000/callback';
let accessToken;
let userName;

export const Spotify = {
    // Redirect user to Spotify Auth page when loggin button is clicked
    getAuth () {
        const tokenURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location = tokenURL;
    },

    // Checks URL on page load - if there's a token to stract, it runs.
    checkAuth() {
        const authenticated = window.location.href.match(/access_token=([^&]*)/);
        if (authenticated) {
            accessToken = authenticated[1];
            return accessToken;
        } else {
            return false;
        }
    },

    getUserName() {
        if(!accessToken) {
            return Promise.reject(new Error('Access token is missing'));
        }
        const nameEndpoint = 'https://api.spotify.com/v1/me';
        return fetch(nameEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to fetch user data');
             }
        })
        .then((data) => {
            userName = data.display_name;
            const userId = data.id;
            return userName;         
        });
    },
}