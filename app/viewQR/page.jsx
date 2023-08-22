'use client'
import RegisterForm from "@/components/Register"
import QRCode from "@/components/qrview";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QRImg from "@/components/qrview";
export default function register(){

    const [userId, setUserId] = useState(
        window.localStorage.getItem('user_id') || ''
    )

    if(userId == '') {
        const router = useRouter()
        alert('User ID not found. Please Login first!')
        router.push('/')
    }

    
    return (
    <div>
        <QRImg userId={userId}/>
    </div>
    ) ;
}