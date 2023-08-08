import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { GET } from "../../content/route"


export const authOptions  : NextAuthOptions= {

  secret: process.env.SECRET!,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
}
const handler = NextAuth(authOptions);
export  { handler as GET , handler as POST};