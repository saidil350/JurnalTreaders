
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#222429] p-6 flex flex-col">
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white mr-3">
          N
        </div>
        <span className="font-semibold">ngana14</span>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <span className="mr-3">D</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg bg-gray-700 text-white">
              <span className="mr-3">S</span>
              <span>Sessions</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <span className="mr-3">S</span>
              <span>Strategies</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <span className="mr-3">C</span>
              <span>Checklists</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <span className="mr-3">J</span>
              <span>Journal</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <span className="mr-3">A</span>
              <span>Analytics</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="bg-[#1A1C20] p-4 rounded-lg">
        <h3 className="font-bold">Upgrade plan</h3>
        <p className="text-sm text-gray-400">Free trial period</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5 my-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
        </div>
        <p className="text-xs text-gray-400">On day 1 of 5</p>
        <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
          + Upgrade
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
