import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import Landing from './components/layout/Landing';
import Dashboard from './components/layout/dashboard/Dashboard';
// import Booking from './components/layout/dashboard/route/Booking';
// import Wellcome from './components/layout/dashboard/route/Wellcome';

// import Navbar from './components/layout/dashboard/Navbar';
// import Sidebar from './components/layout/dashboard/Sidebar';
// import Content from './components/layout/dashboard/Content';
// import LogoutModal from './components/layout/dashboard/LogoutModal';

// import Footer from './components/layout/dashboard/Footer';

// import PrivateRoute from './components/routing/PrivateRoute';
// import Modal from './components/layout/dashboard/route/Products/modals/Modal';
import './App.css';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // console.log(store.getState().aut);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
