'use client'
import RegisterForm from "@/components/Register"
import QRCode from "@/components/qrview";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function register(){

    const [token, setToken] = useState(
        window.localStorage.getItem('access_token') || ''
    )

    const router = useRouter()
    if(token != '') router.push('/')
    
    return (
    <div>
        <RegisterForm />
    </div>
    ) ;
}