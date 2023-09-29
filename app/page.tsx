import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="capitalize">
        a blog application
      </h1>
      {/* write the default signup page for NextAuth */}
      {/* <h2>Sign up</h2>
      <form method="post" action="/api/auth/signup/email">
        <label>
          Email address
          <input type="text" id="email" name="email" />
        </label>
        <button type="submit">Sign up with Email</button>
      </form> */}
      
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/register">Register page</Link>
    </main>
  )
}
