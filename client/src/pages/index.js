import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import { Track } from './track';
import { ScrollToTop } from '../components/scroll-to-top';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <ScrollToTop  path="/">
        <Tracks path="/" />
        <Track path="/track/:trackId" />
      </ScrollToTop>
    </Router>
  );
}
