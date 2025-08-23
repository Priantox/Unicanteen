import { currentUser } from "@clerk/nextjs/server";

// export default async function Page() {
//     const user = await currentUser();

//     if (!user) return <div>Not signed in</div>;

//     return <div>Hello {user?.firstName}</div>;
// }

import React from "react";

const UserInfo = async () => {
    const user = await currentUser();
    console.log(user);
    return (
        <div className="p-4 m-4">
            <h1>Hello {user?.firstName}</h1>
            <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
            <p>User ID: {user?.id}</p>
            <p>Phone: {user?.phoneNumbers[0]?.phoneNumber || "Not provided"}</p>
        </div>
    );
};

export default UserInfo;
