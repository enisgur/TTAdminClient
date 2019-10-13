import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Navbar from './Navbar';
// import Footer from './Footer';

const Content = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const page = (
    <Fragment>
      <div>
        <div>Contnet page Wellcome to Admin Panel</div>
        <Link to="/dashboard/wellcome">wellcome</Link> <br />
        <Link to="/dashboard/booking">booking</Link> <br />
        <Link to="/dashboard/">go Back</Link> <br />
      </div>
    </Fragment>
  );

  return page;
};

Content.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Content);
