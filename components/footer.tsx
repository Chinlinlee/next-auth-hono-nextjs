import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 px-4 mx-0 my-4 w-full text-sm sm:mx-auto sm:my-12 sm:h-5 sm:max-w-3xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <CustomLink href="https://nextjs.authjs.dev">Documentation</CustomLink>
        <CustomLink href="https://www.npmjs.com/package/next-auth">
          NPM
        </CustomLink>
        <CustomLink href="https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs">
          Source on GitHub
        </CustomLink>
        <CustomLink href="/policy">Policy</CustomLink>
      </div>
      <div className="flex gap-2 justify-start items-center">
        <img
          className="size-5"
          src="https://authjs.dev/img/logo-sm.png"
          alt="Auth.js Logo"
        />
        <CustomLink href="https://npmjs.org/package/next-auth">
          {"4.24.11"}
        </CustomLink>
      </div>
    </footer>
  )
}
