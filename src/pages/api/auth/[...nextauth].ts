import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { query as q }from "faunadb"
import {fauna} from "../../../services/faubadb"




export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization:{
        params:{
          scope: "read:user"
        }
      },
    }),
  ],
  secret: process.env.JWT_KEY,
  callbacks: {
    async signIn({ user, account, profile}) {

      const {email} = user
      
      try{
        await fauna.query(
          q.Create(
            q.Collection("users"),
            {data : {email}}
          )
        )
        return true
      } catch {
        return true
      }
    },
  }
})