"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface CandlestickProps {
  data: { date: string; income: number; expense: number }[];
}

const CandlestickChart: React.FC<CandlestickProps> = ({ data }) => {
  const chartData = data.map(item => {
    const difference = item.income - item.expense;
    return {
      date: item.date,
      range: [0, item.income, -item.expense, difference],
      color: difference >= 0 ? '#28a745' : '#dc3545'
    };
  });

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Income vs Expense Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="range">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandlestickChart;
