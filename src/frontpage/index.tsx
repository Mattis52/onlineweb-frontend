import React, { Fragment } from 'react';
import EventsContainer from 'events/components/EventsContainer';
import Offline from './components/Offline';
import Articles from './components/Articles';
import Login from 'authentication/components/Login';

const Frontpage = () => (
  <>
    <Login />
    <EventsContainer />
    <Articles />
    <Offline />
  </>
);

export default Frontpage;
