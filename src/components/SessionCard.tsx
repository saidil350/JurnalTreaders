import React from 'react';

const SessionCard = () => {
  return (
    <div className="p-6 rounded-lg" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">SMC 5 menit</h2>
          <p className="text-sm text-gray-400">No strategy - OANDA:XAUUSD</p>
          <p className="text-sm text-gray-400">May 1, 2025 - Jun 27, 2025</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-yellow-900 mt-2">
            51 days remaining
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Account balance</p>
          <p className="text-3xl font-bold">$5,280.25</p>
          <button className="mt-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            Go to chart <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
