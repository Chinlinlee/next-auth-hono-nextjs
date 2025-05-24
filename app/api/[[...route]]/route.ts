import { Hono } from "hono";
import { handle } from "hono/vercel";
import { env } from "hono/adapter";
import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import GitHubProvider from "next-auth/providers/github";

const app = new Hono()
            .basePath("/api")
            .use("*",
                initAuthConfig(c => ({
                    // from https://github.com/honojs/middleware/issues/895
                    basePath: "/api/auth",
                    secret: env(c).AUTH_SECRET,
                    providers: [
                        GitHubProvider({
                            clientId: env(c).AUTH_GITHUB_ID,
                            clientSecret: env(c).AUTH_GITHUB_SECRET,
                        })
                    ]
                }))
            )
            .use("/auth/*", authHandler())
            .use("/*", verifyAuth())
            .get("/protected", (c) => {
                const authUser = c.get("authUser");
                return c.json({
                    ...authUser,
                    source: "/api/protected"
                });
            });

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
