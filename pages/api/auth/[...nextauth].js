import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.id = token.sub;
            return session;
        },
    },
});
