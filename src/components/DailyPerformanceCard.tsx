'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mon', pnl: 100 },
  { name: 'Tue', pnl: -50 },
  { name: 'Wed', pnl: 150 },
  { name: 'Thu', pnl: -75 },
  { name: 'Fri', pnl: 125 },
];

const DailyPerformanceCard = () => {
  return (
    <div className="p-6 rounded-lg" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Daily Performance</h3>
        <button className="text-gray-400 hover:text-white">i</button>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pnl">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.pnl < 0 ? '#EF4444' : '#3B82F6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyPerformanceCard;
