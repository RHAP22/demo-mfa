import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function onRegister(){
        const response = await fetch('https://mfaecho-1-n7940582.deta.app/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })

        if(response.status == 201){
            alert("Register succesful. Please Login!")
            window.location.href = '/'
        }
    }
    

    return (
    <div className="grid place-items-center h-screen" >
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" 
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <input type="text" placeholder="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <input type="password" placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2"
                type="button"
                onClick={onRegister}
            >
                Register 
                </button>



            <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span 
            className ="underline">Login</span>
                </Link>
             </form>
            </div>
        </div>
        );
}