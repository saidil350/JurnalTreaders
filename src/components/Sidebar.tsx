'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaTachometerAlt, FaClock, FaLightbulb, FaCheckSquare, FaBook, FaChartBar, FaBars, FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navItems = [
  { name: 'Dashboard', icon: FaTachometerAlt, href: '/', active: false },
  { name: 'Sessions', icon: FaClock, href: '/sessions', active: false },
  { name: 'Strategies', icon: FaLightbulb, href: '/strategies', active: false },
  { name: 'Checklists', icon: FaCheckSquare, href: '/checklists', active: false },
  { name: 'Journal', icon: FaBook, href: '/journal', active: false },
  { name: 'Analytics', icon: FaChartBar, href: '/analytics', active: false },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 p-6 flex flex-col fixed h-full z-40" style={{ background: "var(--secondary)", color: "var(--foreground)" }}>
      <div className="flex items-center mb-10 justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white mr-3">
            N
          </div>
          <span className="font-semibold">ngana14</span>
        </div>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-4">
              <Link
                href={item.href}
                className="flex items-center p-2 rounded-lg transition-colors duration-150"
                style={
                  pathname === item.href
                    ? {
                        background: 'var(--background)',
                        color: 'var(--foreground)',
                        boxShadow: 'var(--shadow)'
                      }
                    : {
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }
                }
                onMouseEnter={e => {
                  if (pathname !== item.href) {
                    (e.currentTarget as HTMLElement).style.background = 'var(--background)';
                  }
                }}
                onMouseLeave={e => {
                  if (pathname !== item.href) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                <item.icon className="mr-3" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto flex items-end">
        <ThemeSwitcher />
      </div>
    </aside>
  )
};

export default Sidebar;
