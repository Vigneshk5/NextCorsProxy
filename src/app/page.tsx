"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Next.js CORS Proxy</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium mb-2">
              Enter URL to proxy
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="https://example.com/api"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Loading..." : "Fetch Data"}
          </button>
        </form>

        {response && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Response:</h2>
            <pre className="bg-gray-100 p-4 text-black rounded-md overflow-auto max-h-96">
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
