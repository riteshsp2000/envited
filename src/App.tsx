/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'theme';

const LandingPage = lazy(() => import( /* webpackPrefetch: true */ 'pages/Landing'));
const EventPage = lazy(() => import( /* webpackPrefetch: true */ 'pages/EventPage'));
const CreateEvent = lazy(() => import( /* webpackPrefetch: true */ 'pages/CreateEvent'));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<p>Loading</p>}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/event" element={<EventPage />}/>
            </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
