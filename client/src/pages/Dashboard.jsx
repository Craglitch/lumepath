import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data || null))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p className="text-center mt-20 text-white">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard</h1>
      <p className="text-lg">Hello, {user.email}</p>
    </div>
  );
}

