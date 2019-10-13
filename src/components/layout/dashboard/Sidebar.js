import React from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Sidebar = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const page = (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <Link to="/" className="nav-item nav-link active">
            <span data-feather="home" />
            Dashboard <span className="sr-only">(current)</span>
          </Link>
          <Link to="/dashboard/booking" className="nav-item nav-link">
            <span data-feather="file" />
            Booking
          </Link>
          <Link to="/dashboard/products" className="nav-item nav-link">
            <span data-feather="products" />
            Products
          </Link>
          {/* 
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users" />
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2" />
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers" />
              Integrations
            </a>
          </li> */}
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>User Settings</span>
          <Link to="#" className="d-flex align-items-center text-muted">
            <span data-feather="plus-circle" />
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <span data-feather="file-text" />
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return page;
};

Sidebar.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Sidebar);
