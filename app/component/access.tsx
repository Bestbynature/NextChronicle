"use client"
import { useRouter } from 'next/navigation';

export default function AccessDenied () {
    const router = useRouter();
  return (
    <>
      <h1>Access Denied</h1>
      {/* create a nice template to show users who try to access restricted pages without authentication */}
      <div>
        <p>Seems you are not signed In</p>
        <button onClick={() => router.push('/login')}>Sign In</button>
      </div>
    </>
  )
}