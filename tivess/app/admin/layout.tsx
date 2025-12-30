import type { Metadata } from "next";
import Sidebar from "../component/admin/Sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard - Tivess Media",
  description: "TiveesMedia Admin Dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden min-w-0">
        {children}
      </main>
    </div>
  );
}

