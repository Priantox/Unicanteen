"use client"

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { CanteenDetails } from "@/types/canteen";


export default function CanteenHome() {
  const { userId } = useAuth();
  const [canteenDetails, setCanteenDetails] = useState<CanteenDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchCanteenDetails = async () => {
          try {
              const response = await fetch('/api/canteen-home/canteen-info');
              console.log("Response:", response);
              if (!response.ok) {
                  throw new Error('Failed to fetch canteen details');
                  // console.error('Failed to fetch canteen details', await response.text());
              }
              const data = await response.json();
              setCanteenDetails(data);
          } catch (err) {
              setError(err instanceof Error ? err.message : 'An error occurred');
          } finally {
              setLoading(false);
          }
      };

      if (userId) {
          fetchCanteenDetails();
      }
  }, [userId]);


  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!canteenDetails) {
      return (
          <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">No Canteen Found</h1>
              <p>Please contact an administrator to set up your canteen.</p>
          </div>
      );
  }

  return (
      <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{canteenDetails.name} Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                  <div className="relative w-full h-48 rounded mb-4">
                      <Image 
                          src={canteenDetails.canteen_image || '/default-canteen.jpg'} 
                          alt={`${canteenDetails.name} image`} 
                          fill
                          className="object-cover rounded"
                      />
                  </div>
                  <p>Created: {new Date(canteenDetails.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="p-4 border rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
                  {/* <p>Total Menu Items: {canteenDetails.CanteenFood.length}</p> */}
                  {/* <p>Total Reviews: {canteenDetails.reviews.length}</p> */}
              </div>
          </div>
      </div>
  );
}