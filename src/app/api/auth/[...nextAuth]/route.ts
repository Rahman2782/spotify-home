import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";
import spotfyApi, { LOGIN_URL } from "../../../../../lib/spotify";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT) { //TYPE ERROR WITH JWT - NEEDED IMPORT
    try {
        spotfyApi.setAccessToken(token.accessToken);
        spotfyApi.setRefreshToken(token.refreshToken);

        const { body: refreshedToken } = await spotfyApi.refreshAccessToken();

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken
        }


    } catch (err) {
        console.error('ERROR REFRESHING TOKEN: ', err)
        return {
            ...token,
            error: `refresh access token error`
        }
    }
}

const handler = NextAuth({
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: LOGIN_URL, 
        })
    ],
    secret: process.env.JWT_SECRET, //encrypts the jwt tokens passed by spotify
    pages : {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, account, user }) { //on a successful login, these variables will be returned by spotify
            //initial sign in
            if(account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at ? account.expires_at * 1000 : undefined //handles expiry time in ms if the object exists
                };
            }

            // Check if the token has an expiry time and if it is still valid
            if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
                console.log('existing token is valid')
                return token;
            }

            //if token expires
            return await refreshAccessToken(token);
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;

            return session;
        }
    }
})

export { handler as GET, handler as POST }