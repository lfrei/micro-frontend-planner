import React from 'react';

const RemoteTaskList = React.lazy(() => import('task/TaskList'));
const RemoteEventList = React.lazy(() => import('event/EventList'));

const App = () => (
  <div>
    <h1>Portal</h1>
    <React.Suspense fallback="Loading Task List">
      <div>
        <RemoteTaskList />
      </div>
    </React.Suspense>
    <React.Suspense fallback="Loading Event List">
      <div>
        <RemoteEventList />
      </div>
    </React.Suspense>
  </div>
);

export default App;
