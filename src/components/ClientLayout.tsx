'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const handleToggleSidebar = () => setSidebarHidden((prev) => !prev);
  return (
    <div className="flex h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Sidebar hidden={sidebarHidden} onToggle={handleToggleSidebar} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
} 