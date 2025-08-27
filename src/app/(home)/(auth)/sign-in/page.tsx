"use client"
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
    const router = useRouter();
    router.push("/");
    return <div>Redirecting to Home Page @parvezhossainme </div>;
};

export default SignIn;
