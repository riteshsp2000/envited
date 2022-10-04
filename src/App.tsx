/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import( /* webpackPrefetch: true */ 'pages/Landing'));
const EventPage = lazy(() => import( /* webpackPrefetch: true */ 'pages/EventPage'));
const CreateEvent = lazy(() => import( /* webpackPrefetch: true */ 'pages/CreateEvent'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/event" element={<EventPage />}/>
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
