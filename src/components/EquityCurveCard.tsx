
'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: '03 May', value: 5000 },
  { name: '04 May', value: 5100 },
  { name: '05 May', value: 5050 },
  { name: '06 May', value: 5150 },
  { name: '07 May', value: 5200 },
  { name: '08 May', value: 5250 },
  { name: '09 May', value: 5280.25 },
];

const EquityCurveCard = () => {
  return (
    <div className="bg-[#222429] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Equity Curve</h3>
        <button className="text-gray-400 hover:text-white">i</button>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" domain={['dataMin - 100', 'dataMax + 100']} />
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EquityCurveCard;
