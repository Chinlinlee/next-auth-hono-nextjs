"use client";
import { signIn, signOut } from "@hono/auth-js/react";
import { Button } from "./ui/button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signIn("github")
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signOut()
      }}
      className="w-full"
    >
      <Button variant="ghost" className="p-0 w-full" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
