import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sumbitCateg, modal } from '../../../../../../actions/products';

// import Modal from './modals/Modal';
// import Modal from './modals/Testmodal';
// import Testmodal from './modals/Testmodal';

// import Navbar from './Navbar';
// import Footer from './Footer';

const CategoryModal = ({ sumbitCateg, modal }) => {
  //   useEffect(() => {

  //   }, []);
  // if user not loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const [formData, setFormData] = useState({
    name: '',
    brands: []
  });

  const { name } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //   sumbitBooking(formData);
    // console.log(formData);
    sumbitCateg(formData);
    modal(false);
  };

  const page = (
    <Fragment>
      <div>
        <h4 className="mb-3">Add New Category</h4>
        <form className="clearfix" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="input-name">Category Name</label>
            <input
              autoFocus
              name="name"
              value={name}
              onChange={e => onChange(e)}
              type="text"
              className="form-control"
              id="input-name"
              placeholder="New Category"
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

CategoryModal.propTypes = {
  //   isAuthenticated: PropTypes.bool
  // testmodal: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  // sumbitProduct: PropTypes.func.isRequired,
  // categories: PropTypes.func.isRequired,
  // products: PropTypes.object
  sumbitCateg: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   //   isAuthenticated: state.auth.isAuthenticated
//   //   isAuthenticated: state.auth.isAuthenticated
//   // categories: state.products.categories
//   products: state.products
// });

export default connect(
  null,
  { sumbitCateg, modal }
)(CategoryModal);
