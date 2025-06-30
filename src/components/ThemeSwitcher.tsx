"use client";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-3 items-center p-3 rounded-lg bg-[var(--secondary)] shadow-md">
      <Image src="/next.svg" alt="Logo" width={28} height={28} className="drop-shadow" />
      <div className="flex flex-col">
        <label className="text-xs font-semibold mb-1">Pilih Tema:</label>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value as any)}
          className="border rounded px-2 py-1 bg-[var(--background)] text-[var(--foreground)] text-sm"
        >
          <option value="light">Terang</option>
          <option value="dark">Gelap</option>
          <option value="system">Sesuai Perangkat</option>
        </select>
      </div>
    </div>
  );
} 