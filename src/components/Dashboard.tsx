import React from 'react';
import SessionCard from './SessionCard';
import DescriptionCard from './DescriptionCard';
import EquityCurveCard from './EquityCurveCard';
import MonthlyPerformanceCard from './MonthlyPerformanceCard';
import DailyPerformanceCard from './DailyPerformanceCard';
import StatCard from './StatCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <SessionCard />
      </div>
      <div>
        <DescriptionCard />
      </div>
      <div className="lg:col-span-1">
        <EquityCurveCard />
      </div>
      <div className="lg:col-span-1">
        <MonthlyPerformanceCard />
      </div>
      <div className="lg:col-span-1">
        <DailyPerformanceCard />
      </div>
      <div className="lg:col-span-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard title="Total PnL" value="$280.25" />
          <StatCard title="Win Rate" value="46.15%" />
          <StatCard title="Risk/Reward" value="2.11" />
          <StatCard title="Month Gain/Loss" value="$280.25" />
          <StatCard title="Week Gain/Loss" value="$150.75" />
          <StatCard title="Daily Gain/Loss" value="-$25.50" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
