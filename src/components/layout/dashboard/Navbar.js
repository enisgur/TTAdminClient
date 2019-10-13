import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Navbar = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const page = (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Link to="#" className="navbar-brand col-sm-3 col-md-2 mr-0">
        Company name
      </Link>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link to="#" className="nav-link">
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );

  return page;
};

Navbar.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);
