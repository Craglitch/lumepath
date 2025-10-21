import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Logon from "./components/Logon";
import Dashboard from "./pages/Dashboard";
import useAuth from "./hooks/useAuth";
// INI BUAT BENDE BOLEH JADI YANG JANGAN SENTUH

export default function App() {
  const { user, loading } = useAuth();

  // checking loading untuk verifikasi lah anjing
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Checking session...
      </div>
    );
  }
	// DILARANG DILARANG SENTUH KODE KODE DI BAWA SEMUA DI BUAT OLEH AMIRUL 
	// SENTUH NANTI AKU LUKU PALA HANG BAAAB
	// SEMUA SUDAH DI BUAT OLEH AMIRUL JANGAN SENTUH

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <Routes>
        {/* Home route - yang ni jangan sentuh kalau sentuh aku p potong tangan hang*/}
        <Route path="/" element={<Home />} />




        {/* Logon page — redirect to dashboard if already logged in 
	    kalau  login dia masuk ke dashboard  	*/}
        <Route
          path="/logon"
          element={user ? <Navigate to="/dashboard" replace /> : <Logon />}
        />

        {/* INI DASHBOARD SAYA SET DIA MASUK JIK ADAH LOG IN*/}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/logon" replace />}
        />

        {/* Catch-all route — semua apa apa yang berlaku jatuh balik ke rumah */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

