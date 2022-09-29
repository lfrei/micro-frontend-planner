import React from 'react';

const TaskWidget = React.lazy(() => import('task/TaskWidget'));
const EventWidget = React.lazy(() => import('event/EventWidget'));

const Dashboard = () => (
  <div>
    <div>
        <React.Suspense fallback="Loading Task Widget...">
            <TaskWidget />
        </React.Suspense>
    </div>
    <div>
        <React.Suspense fallback="Loading Event Widget...">
            <EventWidget />
        </React.Suspense>
    </div>
  </div>
);

export default Dashboard;
