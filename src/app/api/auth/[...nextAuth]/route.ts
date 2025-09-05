import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

const handler = NextAuth({
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: LOGIN_URL, //change to actual url later
        })
    ],
})

export { handler as GET, handler as POST }