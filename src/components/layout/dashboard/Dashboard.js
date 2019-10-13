import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';
import Navbar from './Navbar';
import Wellcome from './route/Wellcome';
import Booking from './route/Booking';
import Products from './route/Products';
// import LogoutModal from './LogoutModal';

const Dashboard = ({ isAuthenticated }) => {
  // if user loged in redirect to /dashboard
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  const page = (
    <Fragment>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <Route exact path="/dashboard" component={Content} />
              <Route path="/dashboard/wellcome" component={Wellcome} />
              <Route path="/dashboard/booking" component={Booking} />
              <Route path="/dashboard/products" component={Products} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  );

  return !isAuthenticated ? (
    <div>You have to login to access dashboard</div>
  ) : (
    page
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
