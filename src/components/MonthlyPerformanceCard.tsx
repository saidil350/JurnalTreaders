'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'May', pnl: 280.25 },
];

const MonthlyPerformanceCard = () => {
  return (
    <div className="p-6 rounded-lg" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Monthly Performance</h3>
        <button className="text-gray-400 hover:text-white">i</button>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis type="category" dataKey="name" stroke="#9CA3AF" />
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pnl" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyPerformanceCard;
