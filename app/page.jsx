"use client"
import LoginForm from "@/components/loginform";
import { useEffect, useState } from "react";


export default function Home() {
  const [token, setToken] = useState(
    window.localStorage.getItem('access_token') || ''
  )

  useEffect(() => {
    window.localStorage.setItem('access_token', token)
  }, [token])
  
  if(token == ''){
    return ( 
      <main>
       <LoginForm 
          setToken = {setToken}
        />
      </main> 
    )
  }


  return ( 
    <div>
      Halo from Dashboard
      <br></br>
      <div>
        <button className="bg-red-600 text-white font-bold cursor-pointer px-6 py-2"
          type='button'
          onClick={() => {
            window.localStorage.removeItem('access_token')
            window.localStorage.removeItem('user_id')
            window.location.reload()
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
