import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import Navbar from './Navbar';
// import Footer from './Footer';

const Wellcome = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const mypage = (
    <div>
      <Link to="/dashboard/booking">booking</Link> <br />
      <Link to="/dashboard/">go Back</Link> <br />
      <div> wellcome page </div>
    </div>
  );

  return mypage;
};

Wellcome.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Wellcome);
