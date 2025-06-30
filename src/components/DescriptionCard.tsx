import React from 'react';

const DescriptionCard = () => {
  return (
    <div className="p-6 rounded-lg h-full" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Description</h3>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM5 12V7.172l2.586-2.586a2 2 0 012.828 0L18 12.172V15a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" />
          </svg>
        </button>
      </div>
      <div className="text-gray-400">
        {/* Content for description goes here */}
      </div>
    </div>
  );
};

export default DescriptionCard;
