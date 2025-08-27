"use client";
// import { transferRole } from "@/lib/transferRole";
import { useSignUp, useUser } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomSignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("DEFAULT");
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setLoading(true);
      setError("");

      // Create the sign-up with unsafe metadata
      await signUp.create({
        emailAddress: email,
        password,
        unsafeMetadata: {
          role: role
        }
      });

      // Start email verification
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setShowVerification(true);

    } catch (err: any) {
      setError(err.message || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setLoading(true);
      setError("");

      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        // Set the active session first
        await setActive({ session: result.createdSessionId });

        // Get the role from unsafe metadata
        const userRole = role;

        // Determine redirect path
        const redirectPath = userRole === "CUSTOMER" 
          ? "/customer-home"
          : userRole === "CANTEEN_OWNER" 
            ? "/canteen-home" 
            : userRole === "DELIVERY_PERSON" 
              ? "/delivery-home"
              : "/";

        // Redirect first to ensure proper session
        router.replace(redirectPath);

        // Transfer role after a small delay to ensure session is established
        setTimeout(async () => {
          try {
            // await transferRole();
            console.log('Role transferred successfully');
          } catch (error) {
            console.error('Error transferring role:', error);
          }
        }, 1000);

      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Verification error:", err);
      setError(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {showVerification ? "Verify your email" : "Create your account"}
        </h2>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {!showVerification ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="CUSTOMER">Customer</option>
                <option value="CANTEEN_OWNER">Canteen Owner</option>
                <option value="DELIVERY_PERSON">Delivery Person</option>
              </select>
            </div>

            <div id="clerk-captcha" className="mt-4" />

            <button
              type="submit"
              disabled={loading || !isLoaded}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleVerification}>
            <div className="rounded-md shadow-sm">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                placeholder="Enter verification code"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !isLoaded}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
            >
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}