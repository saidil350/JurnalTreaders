import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="p-4 rounded-lg" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm text-gray-400">{title}</h4>
        <button className="text-gray-400 hover:text-white">i</button>
      </div>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
