import React from 'react';

const TaskList = React.lazy(() => import('task/TaskList'));
const EventList = React.lazy(() => import('event/EventList'));

const Dashboard = () => (
  <div>
    <React.Suspense fallback="Loading Tasks List...">
        <TaskList />
    </React.Suspense>
    <React.Suspense fallback="Loading Event List...">
        <EventList />
    </React.Suspense>
  </div>
);

export default Dashboard;
