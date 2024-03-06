"use client"

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"

export default function SignIn() {

    return (
        <>
            <button className="btn btn-secondary" onClick={() => signIn('google')}>
                <FcGoogle /> Login with Google</button>
        </>
    );
}