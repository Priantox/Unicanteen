import React from "react";
import { removeRole, setRole } from "@/actions/admin/_actions";
import { clerkClient } from "@clerk/nextjs/server";
import { RoleType } from "@/types/roles";

const AdminDashboard = async () => {
    const client = await clerkClient();
    const users = (await client.users.getUserList()).data;

    return (
        <div className="p-4">
            {users.map((user) => {
                const currentRole = user.publicMetadata.role as RoleType;
                const email = user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress;

                return (
                    <div key={user.id} className="mb-6 p-4 border rounded">
                        <div className="font-semibold">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm text-gray-600">
                            Email: {email}
                        </div>
                        <div className="text-sm mb-2">
                            Current Role: {currentRole || "No Role"}
                        </div>

                        <div className="flex gap-x-3">
                            <form action={setRole}>
                                <input type="hidden" value={user.id} name="id" />
                                <input
                                    type="hidden"
                                    value="CUSTOMER"
                                    name="role"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md px-3 py-1 text-sm"
                                >
                                    Set Customer
                                </button>
                            </form>

                            <form action={setRole}>
                                <input type="hidden" value={user.id} name="id" />
                                <input
                                    type="hidden"
                                    value="CANTEEN_OWNER"
                                    name="role"
                                />
                                <button
                                    type="submit"
                                    className="bg-green-100 hover:bg-green-200 text-green-700 rounded-md px-3 py-1 text-sm"
                                >
                                    Set Canteen Owner
                                </button>
                            </form>

                            <form action={setRole}>
                                <input type="hidden" value={user.id} name="id" />
                                <input
                                    type="hidden"
                                    value="DELIVERY_PERSON"
                                    name="role"
                                />
                                <button
                                    type="submit"
                                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-md px-3 py-1 text-sm"
                                >
                                    Set Delivery Person
                                </button>
                            </form>

                            <form action={setRole}>
                                <input type="hidden" value={user.id} name="id" />
                                <input
                                    type="hidden"
                                    value="ADMIN"
                                    name="role"
                                />
                                <button
                                    type="submit"
                                    className="bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-md px-3 py-1 text-sm"
                                >
                                    Set Admin
                                </button>
                            </form>

                            <form action={removeRole}>
                                <input type="hidden" value={user.id} name="id" />
                                <button
                                    type="submit"
                                    className="bg-red-100 hover:bg-red-200 text-red-700 rounded-md px-3 py-1 text-sm"
                                >
                                    Remove Role
                                </button>
                            </form>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AdminDashboard;