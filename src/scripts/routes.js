import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app';
import Index from './views/Index';
import Images from './components/upload/Images';
import Link from './components/upload/Link';
import Privacy from './components/upload/Privacy';

export default (
  <Route component={App}>
    <Route path="/" component={Index}>
      <IndexRoute component={Images} />
      <Route path="link" component={Link} />
      <Route path="privacy" component={Privacy} />
    </Route>
  </Route>
);
