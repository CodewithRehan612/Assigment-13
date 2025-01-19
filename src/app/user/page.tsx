'use client'
import LoginForm from "@/components/LoginForm"
import SignUpForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function User(){

    const [isLogin, setIsLogin] = useState(true)

    return(
        <div className="min-h-screen flex flex-coljustify-center content-center bg-gray-50">
            <div className="mb-4">
                <Button
                    className="text-sm"
                    onClick={(isLogin) => setIsLogin(!isLogin)}
                    variant={"ghost"}
                    >
                        {isLogin ? 'Need a account: Create' : 'Login with your current accoun'}
                </Button>

            </div>
            {isLogin ? <LoginForm/> : <SignUpForm/>}
        </div>
    )
}