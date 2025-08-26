/*
model User {
  id        String  @id // Clerk user.id
  email     String? @unique
  name      String?
  phone     String? @unique
  studentId String? // University ID if needed
  userRole  RoleType @default(CUSTOMER)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
*/

import { currentUser } from '@clerk/nextjs/server';
import React from 'react'
import { setUserDataToDB, UserData } from '@/actions/users/setUserData';

const SetUserDataFromClerkToDB =  async () => {
    const user = await currentUser();
    console.log(user);
    if (!user) {
        return <div>User not found</div>;
    }
    const userData: UserData = {
        userId: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.firstName || null,
        phone: user.phoneNumbers[0]?.phoneNumber || null,
        role: "DEFAULT", // Default role
        studentId: null, 
    };

    // Data Call
    await setUserDataToDB(userData);
    console.log(`User data for ${user.id} set successfully.`);
    
    return (
        <div>
            <h1>Set User Data From Clerk To DB</h1>

        </div>
    )
}

export default SetUserDataFromClerkToDB
