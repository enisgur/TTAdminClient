import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import Navbar from './Navbar';
// import Footer from './Footer';

const Booking = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const page = (
    <Fragment>
      <div className="table-responsive">
        <h1>Booking</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <div className="links">
          <Link to="/dashboard/wellcome">wellcome</Link> <br />
          <Link to="/dashboard/">go Back</Link> <br />
        </div>
      </div>
    </Fragment>
  );

  return page;
};

Booking.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Booking);
