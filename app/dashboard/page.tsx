"use client"

// import { setUser } from "@/redux/feature/blogSlice";
import { useRouter } from "next/navigation";
import NavBar from "../component/Appbar";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useSession } from "next-auth/react"
import { Button, TextField, Typography } from "@mui/material";
import Footer from "../component/Footer";
import User from "../component/User";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import SendIcon from '@mui/icons-material/Send';
  

const Dashboard = () => {
  // const dispatch = useAppDispatch();
  const router = useRouter()

  // const { data: session, status } = useSession();
  // const usermail = session?.user?.email
  // if(usermail) dispatch(setUser(usermail))

  // const { user } = useAppSelector((store) => store.blogService)


  return (
    <main>
      <div className="inner">
        <div className="first">
          <User/>
          <NavBar/>
        </div>
        <div className="second">2</div>
        <div className="third">
          <div>Get Connected with us on social media</div>
          <div style={{display: "flex", justifyContent: "space-around", width: "60%"}}>
            <FacebookRoundedIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <GoogleIcon/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
          <TextField
            size="small"
            required
            id="outlined-required"
            label="Required"
            placeholder="Enter your email address"
          />
          <Button variant="contained" endIcon={<SendIcon />}>Subscribe </Button>
          </div>
        </div>
        <Footer/>
      </div>
      
    </main>
  )
}

export default Dashboard

/**
 * <h1>Dashboard</h1>
      <p>{session?.user?.email}</p>
      
 */