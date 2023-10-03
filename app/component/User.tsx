
// import { getServerSession } from 'next-auth';
import React from 'react'
// import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const User = async () => {
    // const userData = await getServerSession(authOptions);

  return (
    <div className='user'>
        <h2>Welcome User</h2>
        <Link href="/api/auth/signout"
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>         
        Sign Out
        </Link>
    </div>
  )
}

export default User