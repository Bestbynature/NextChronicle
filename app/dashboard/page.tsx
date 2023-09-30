"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const router = useRouter()
  const { data: session, status } = useSession();
  console.log(session)
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session?.user?.name}</p>
      <button 
      type='button'
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' 
        onClick={()=>router.push("/api/auth/signout")}
        >Sign Out
        </button>
    </div>
  )
}

export default Dashboard