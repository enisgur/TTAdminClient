import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submitBrand, modal } from '../../../../../../actions/products';

// import Modal from './modals/Modal';
// import Modal from './modals/Testmodal';
// import Testmodal from './modals/Testmodal';

// import Navbar from './Navbar';
// import Footer from './Footer';

const BrandModal = ({ submitBrand, modal, categ }) => {
  //   useEffect(() => {

  //   }, []);
  // if user not loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  //   console.log(categ);

  const [formData, setFormData] = useState({
    brands: '',
    categ: categ
  });

  const { brands } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //   sumbitBooking(formData);
    // console.log(formData);
    submitBrand(formData);
    modal(false);
  };

  const page = (
    <Fragment>
      <div>
        <h4 className="mb-3">
          Add New Brand for <span style={{ color: 'red' }}>{categ}</span>
        </h4>
        <h6 style={{ marginBottom: '30px' }}>
          <sub>
            <i>
              Please make sure you select a category that you want to add brand
              under that selected category !
            </i>
          </sub>
        </h6>
        <hr />
        <form className="clearfix" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="input-name">Brand Name for</label>
            <input
              autoFocus
              name="brands"
              value={brands}
              onChange={e => onChange(e)}
              type="text"
              className="form-control"
              id="input-name"
              placeholder={'New Brand for ' + categ}
            />
          </div>

          <button type="submit" className="btn btn-primary float-right ">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );

  return page;
};

BrandModal.propTypes = {
  //   isAuthenticated: PropTypes.bool
  // testmodal: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  // sumbitProduct: PropTypes.func.isRequired,
  // categories: PropTypes.func.isRequired,
  // products: PropTypes.object
  submitBrand: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   //   isAuthenticated: state.auth.isAuthenticated
//   //   isAuthenticated: state.auth.isAuthenticated
//   // categories: state.products.categories
//   products: state.products
// });

export default connect(
  null,
  { submitBrand, modal }
)(BrandModal);
