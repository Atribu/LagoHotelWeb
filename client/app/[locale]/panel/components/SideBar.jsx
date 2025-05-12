"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/tr/panel/login"); // 🔹 dil path'in varsa buraya dikkat
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-6 border-r flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">Yönetim Paneli</h2>
        <ul className="space-y-3">
          <li><Link href="/panel/dashboard">Dashboard</Link></li>
          <li><Link href="/panel/kullanicilar">Kullanıcılar</Link></li>
          <li><Link href="/panel/egitimler">Eğitimler</Link></li>
          <li><Link href="/panel/kullanicilar/yeni">+ Yeni Kullanıcı</Link></li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        🔓 Çıkış Yap
      </button>
    </aside>
  );
}