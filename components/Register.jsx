import Link from "next/link";
import QrcodeImg from "./Otp";

export default function RegisterForm() {
    return (
    <div className="grid place-items-center h-screen" >
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <QrcodeImg></QrcodeImg>
        <form className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
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