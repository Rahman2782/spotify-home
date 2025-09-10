import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions
   */
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    username?: string;
    accessTokenExpires?: number;
  }
}

import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      accessToken?: string;
      refreshToken?: string;
      username?: string;
      accessTokenExpires?: number;
    };
  }
}