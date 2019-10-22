import React, { Fragment, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  categories,
  sumbitProduct,
  modal
} from '../../../../../actions/products';

// import Modal from './modals/Modal';
// import Modal from './modals/Testmodal';
import Modal from './modals/Modal';
import CategoryModal from './modals/CategoryModal';
import BrandModal from './modals/BrandModal';

// import Navbar from './Navbar';
// import Footer from './Footer';

const NewProduct = ({ categories, products, sumbitProduct, modal }) => {
  useEffect(() => {
    categories();
    // dispatch(categories());
    return () => modal(false);
  }, [categories, modal]);
  // if user not loged in redirect to /dashboard
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }

  const modalCategContent = () => {
    return <CategoryModal />;
  };

  const modalBrandContent = () => {
    return <BrandModal categ={category} />;
  };

  const [modalCateg, setModalCateg] = useState(false);
  const [modalBrand, setModalBrand] = useState(false);

  const [formData, setFormData] = useState({
    picture: '',
    category: 'category',
    brand: 'brand',
    product: '',
    description: '',
    edit: false
  });

  // const { picture } = formData;
  const { category } = formData;
  const { brand } = formData;
  const { product } = formData;
  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'category':
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          brand: 'brand'
        });
        document.querySelector('.brandButton').style.display = 'inline';
        break;
      case 'picture':
        setFormData({
          ...formData,
          picture: e.target.files[0]
        });
        break;

      default:
        break;
    }
  };

  const onAddCategory = e => {
    e.preventDefault();
    // console.log('clicked add categ');
    // console.log(products.isModal);
    // modalContent = <div>nabeeerr</div>;
    setModalBrand(false);
    setModalCateg(true);
    products.isModal ? modal(false) : modal(true);
  };

  const onAddBrand = e => {
    e.preventDefault();
    // console.log('clicked add categ');
    // console.log(products.isModal);
    setModalCateg(false);
    setModalBrand(true);
    products.isModal ? modal(false) : modal(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    //   sumbitBooking(formData);
    console.log(formData);
    sumbitProduct(formData);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const categ = products.categories
    ? products.categories.map(cat => {
        return (
          <option key={cat.name} value={cat.name}>
            {capitalizeFirstLetter(cat.name)}
          </option>
        );
      })
    : null;

  const brands = products.categories
    ? products.categories.map(cat => {
        return cat.name === category
          ? cat.brands.map(brand => {
              return (
                <option key={brand} value={brand}>
                  {capitalizeFirstLetter(brand)}
                </option>
              );
            })
          : null;
      })
    : null;

  const page = (
    <Fragment>
      <h4 className="mb-3">Add New Product</h4>
      <h1 style={{ color: 'red' }}>add Success page after submit</h1>
      <hr />
      <form onSubmit={e => onSubmit(e)} className="clearfix">
        <div className="form-group">
          <label htmlFor="input-upload">Product Picture</label>
          <input
            type="file"
            // value={picture}
            onChange={e => onChange(e)}
            name="picture"
            className="form-control-file"
            id="input-upload"
          />
        </div>

        <div className="form-group">
          <div>
            <label style={{ display: 'block' }} htmlFor="input-category">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={e => onChange(e)}
              id="input-category"
              className="form-control"
              style={{ width: '80%', display: 'inline' }}
            >
              <option value="category" disabled>
                Category
              </option>
              {categ}
              {/* <option value="case">Case</option>
              <option value="landyard">Landyard</option>
              <option value="speaker">Speaker</option> */}
            </select>
            <button
              style={{ float: 'right', width: '15%', display: 'inline' }}
              className="clearfix"
              onClick={e => onAddCategory(e)}
            >
              Add Category
            </button>
          </div>
        </div>
        <div className="form-group" id="i-brand">
          <div>
            <label style={{ display: 'block' }} htmlFor="input-brand">
              Brand
            </label>
            <select
              name="brand"
              value={brand}
              onChange={e => onChange(e)}
              id="input-brand"
              className="form-control"
              style={{ width: '80%', display: 'inline' }}
            >
              <option value="brand" disabled>
                Brand
              </option>
              {brands}
              {/* <option value="otter box">Otter Box</option>
              <option value="incipio">Incipio</option>
              <option value="speck">Speck</option> */}
            </select>
            <button
              // style={{ float: 'right', width: '15%', display: 'inline' }}
              style={{ float: 'right', width: '15%', display: 'none' }}
              className="clearfix brandButton"
              onClick={e => onAddBrand(e)}
            >
              Add Brand
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="input-product">Product</label>
          <input
            name="product"
            value={product}
            onChange={e => onChange(e)}
            type="text"
            className="form-control"
            id="input-product"
            placeholder="Product"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-desc">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={e => onChange(e)}
            type="textarea"
            className="form-control"
            id="input-desc"
            placeholder="Description Here..."
          />
        </div>
        <button type="submit" className="btn btn-primary float-right ">
          Submit
        </button>
      </form>
      {/* <Modal /> */}
      {/* {modalOpen ? <Modal active={modalOpen} /> : null} */}
      {/* <Modal active={modalOpen} /> */}

      {modalCateg && (
        <Modal isOpen={products.isModal} onClose={e => modal(false)}>
          {modalCategContent()}
        </Modal>
      )}

      {modalBrand && (
        <Modal isOpen={products.isModal} onClose={e => modal(false)}>
          {modalBrandContent()}
        </Modal>
      )}
      {/* <Testmodal isOpen={products.isModal} onClose={e => modal(false)}>
        testModal
        {modalContent}
      </Testmodal> */}
    </Fragment>
  );

  return page;
};

NewProduct.propTypes = {
  //   isAuthenticated: PropTypes.bool
  // testmodal: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  sumbitProduct: PropTypes.func.isRequired,
  categories: PropTypes.func.isRequired,
  products: PropTypes.object
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
  // categories: state.products.categories
  products: state.products
});

export default connect(
  mapStateToProps,
  { categories, sumbitProduct, modal }
)(NewProduct);
