import React from "react";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const TaskList = React.lazy(() => import('task/TaskList'));
const EventList = React.lazy(() => import('event/EventList'));

const renderMFE = (MFE) => {
    return(
        <React.Suspense fallback="Loading...">
            <MFE />
        </React.Suspense>
    )
}

const Main = () => (
  <div>
    <h1>Portal</h1>
    <nav>
        <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/task">Task</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path="task" element={renderMFE(TaskList)} />
        <Route path="event" element={renderMFE(EventList)} />
    </Routes>
  </div>
);

export default Main;