import React, { PropTypes } from 'react';
import { Router, browserHistory as history } from 'react-router';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';

injectTapEventPlugin();

const App = ({ children }) => (
  <div>
    {React.cloneElement(children || <div />)}
  </div>
);

render((
  <Router history={history}>{routes}</Router>
), document.getElementById('main'));

App.propTypes = {
  children: PropTypes.array,
};

App.defaultProps = {
  children: [],
};

export default App;
