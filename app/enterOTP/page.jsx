'use client'
import RegisterForm from "@/components/Register"
import QRCode from "@/components/qrview";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QRImg from "@/components/qrview";
import { Result } from "postcss";
export default function enterOTP(){

    const [userId, setUserId] = useState(
        window.localStorage.getItem('user_id') || ''
    )

    if(userId == '') {
        const router = useRouter()
        alert('User ID not found. Please Login first!')
        router.push('/')
    }

    const [OTP, setOTP] = useState('')

    async function validate(){
        const response = await fetch('https://mfaecho-1-n7940582.deta.app/api/auth/otp/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                token: OTP
            })
        })
        response.json().then(res => {
            if('otp_valid' in res){
                if(res.otp_valid == true){
                    window.localStorage.setItem('access_token', userId)
                    window.location.href = '/success'
                }
            }
        })
    }

    
    return (
    <div className="grid place-items-center h-screen" >
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">Enter OTP Code</h1>

            <form style={{ 
                marginBottom: 2 + 'vh'
             }}>
                <input type='text' placeholder="Enter OTP"
                    value={OTP}
                    onChange={(e) => {
                        setOTP(e.target.value)
                    }}
                />
            </form>


                <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <button className="bg-gray-600 text-white font-bold cursor-pointer px-6 py-2"
                        onClick={() => {window.location.href = '/viewQR'}}
                    >Back</button>
                    <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2"
                        onClick={validate}
                    >Next</button>
                </div>
        </div>
    </div>
    ) ;
}