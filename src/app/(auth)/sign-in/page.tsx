import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
    const router = useRouter();
    router.push("/");
    return <div>SignIn</div>;
};

export default SignIn;
