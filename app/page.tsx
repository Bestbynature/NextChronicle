"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className='landing-wrapper'>
      <div className="dark">
        <p>The Home of Intelligent Blogs!</p>
        <div className="action">
            <button 
            className="sign-in-button"
            type='button'
            onClick={() => router.push('/login')}>
              Sign In / Register
            </button>
        </div>
      </div>
      <div className="landing-page">
        <h1 className="landing-page-title">Welcome to the the Next Chronicle's Blog Application</h1>
        <p className="landing-page-description">Explore, create, and connect with others through blog posts.</p>
        <div className="action">
          <button 
          className="sign-in-button"
          type='button'
          onClick={() => router.push('/login')}>
            Sign In / Register
          </button>
        </div>
      </div>
      <div className="dark">Sign in to enjoy all the benefits</div>
    </div>
  )
}

export default LandingPage