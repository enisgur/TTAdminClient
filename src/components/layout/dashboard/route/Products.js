import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import Navbar from './Navbar';
// import Footer from './Footer';
import NewProduct from './Products/NewProduct';
import ShowProducts from './Products/ShowProducts';

const Products = () => {
  // if user loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  // const mypage = (
  //   <div>
  //     <Link to="/dashboard/booking">Add New Product</Link> <br />
  //     <Link to="/dashboard/booking">Add New Product</Link> <br />
  //     <Link to="/dashboard/">go Back</Link> <br />
  //     <div> wellcome page </div>
  //   </div>
  // );

  const navPage = props => {
    const propsParam = props.match.params.page;

    switch (propsParam) {
      case 'newproduct':
        return <NewProduct />;
      case 'cases':
        return <ShowProducts />;

      default:
        break;
    }
    return (
      <div className="col-md-12">
        <div>test Product</div>
        <div>{props.match.params.page}</div>
      </div>
    );
  };

  const page = (
    <Fragment>
      <div className="table-responsive">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              to="/dashboard/products/newproduct"
              className="nav-link active"
            >
              + Add New Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/products/cases" className="nav-link">
              Show All Cases
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/products/speakers" className="nav-link">
              Show All Speakers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/products/landyards" className="nav-link">
              Show All Landyards
            </Link>
          </li>
        </ul>
        <hr />
        <div>
          <Route path="/dashboard/products/:page" component={navPage} />
        </div>
      </div>
    </Fragment>
  );

  return page;
};

Products.propTypes = {
  //   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Products);
