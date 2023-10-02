"use client"

import { setUser } from "@/redux/feature/blogSlice";
// import { useRouter } from "next/navigation";
import NavBar from "../component/Appbar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react"
import { Typography } from "@mui/material";

  

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { data: session, status } = useSession();
  const usermail = session?.user?.email
  // if(usermail) dispatch(setUser(usermail))

  // const { user } = useAppSelector((store) => store.blogService)


  return (
    <main>
      <div className="inner">
        <div className="first">
        <Typography>
            {/* Welcome, {user} */}
          </Typography>
          <NavBar/>
        </div>
        <div className="second">2</div>
        <div className="third">3</div>
        <div className="fourth">4</div>
      </div>
      
    </main>
  )
}

export default Dashboard

/**
 * <h1>Dashboard</h1>
      <p>{session?.user?.email}</p>
      <button 
      type='button'
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' 
        onClick={()=>router.push("/api/auth/signout")}
        >Sign Out
        </button>
 */