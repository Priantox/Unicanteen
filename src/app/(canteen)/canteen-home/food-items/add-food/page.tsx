"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddFoodPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    try {
      const foodData = {
        name: formData.get("name"),
        price: parseFloat(formData.get("price") as string),
        description: formData.get("description"),
        image: formData.get("image"),
        rating: 0, // Default rating for new items
        stocks: parseInt(formData.get("stocks") as string),
        availability: formData.get("availability") === "true",
      };

      const response = await fetch("/api/canteen-home/add-food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      router.push("/canteen-home/food-items");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add food item");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Food Item</h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Food Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter food name"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price (৳) *
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            min="0"
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter food description"
          ></textarea>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="stocks" className="block text-sm font-medium mb-2">
            Initial Stock *
          </label>
          <input
            type="number"
            id="stocks"
            name="stocks"
            min="0"
            defaultValue="10"
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Availability</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="availability"
                value="true"
                defaultChecked
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Available</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="availability"
                value="false"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Not Available</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          {loading ? "Adding..." : "Add Food Item"}
        </button>
      </form>
    </div>
  );
}