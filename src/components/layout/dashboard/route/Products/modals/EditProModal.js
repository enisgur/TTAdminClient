import React, { Fragment, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sumbitProduct, categories } from '../../../../../../actions/products';

// import Modal from './modals/Modal';
// import Modal from './modals/Testmodal';
// import Testmodal from './modals/Testmodal';

// import Navbar from './Navbar';
// import Footer from './Footer';

const EditProModal = ({ products, sumbitProduct, categories, pro }) => {
  useEffect(() => {
    categories();

    // setFormData({ ...formData, category: pro.category });
    // setFormData({ ...formData, brand: pro.brand });
  }, [categories]);

  const [formData, setFormData] = useState({
    id: pro._id,
    picture: pro.image,
    // category: 'category',
    category: pro.category,
    // brand: 'brand',
    brand: pro.brand,
    product: pro.product,
    description: pro.description,
    err: null,
    edit: true
  });

  const { picture } = formData;
  const { category } = formData;
  const { brand } = formData;
  const { product } = formData;
  const { description } = formData;
  const { err } = formData;

  function loadCheckBox(callback) {
    if (products.categories) {
      // const result = products.categories.filter(
      //   flt => flt.name === 'landyards'
      // );

      for (let i = 0; i < products.categories.length; i++) {
        const categs = products.categories[i].name
          .replace(/\s/g, '')
          .toLowerCase();
        // console.log('tesstt categs : ', categs);
        for (let z = 0; z < pro.category.length; z++) {
          const proCateg = pro.category[z].replace(/\s/g, '').toLowerCase();
          // console.log('Test proCateg : ', proCateg);

          if (categs === proCateg) {
            // return console.log('Found !!!!!!!!!!!');
            // return console.log(proCateg);
            return callback(proCateg);
          }
        }
      }
      // const result2 = pro.category.filter(flt => flt === result.nam)
      // console.log('result is here : ', result);
    }
  }

  // loadCheckBox(testCallback);

  function testCallback(rslt) {
    // console.log('from callback : !!!! : : ', rslt);
    // setFormData({ ...formData, checkBox: [rslt] });
    console.log('testCallBack !');
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const newCateg = async () => {
    // const zz = await categ;

    // console.log(zz);
    setFormData({ ...formData, category: pro.category });
    return categ;
  };

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

  // console.log('from edit modal : : : ', formData);
  // console.log('from edit modal : : : ', pro);

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
        break;
      case 'brand':
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          err: null
        });
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

  const onSubmit = e => {
    e.preventDefault();
    if (brand === 'brand') {
      setFormData({ ...formData, err: 'Please select a brand !' });
      return alert('Please select a brand !');
    }
    //   sumbitBooking(formData);
    // console.log(formData);
    sumbitProduct(formData);
    // modal(false);
  };

  const page = (
    <Fragment>
      <div>
        <h4 className="mb-3">
          Edit this product : <span style={{ color: 'red' }}>{product}</span>
        </h4>
        <hr />
        {err && (
          <h5
            style={{
              color: '#fa4214',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            {err}
          </h5>
        )}
        <form className="clearfix" onSubmit={e => onSubmit(e)}>
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
            </div>
          </div>
          <div className="form-group" id="i-brand">
            <div>
              {err ? (
                <label
                  style={{ display: 'block', color: '#d60000' }}
                  htmlFor="input-brand"
                >
                  * Brand
                </label>
              ) : (
                <label
                  style={{ display: 'block', color: '#000000' }}
                  htmlFor="input-brand"
                >
                  Brand
                </label>
              )}

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
              </select>
            </div>
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

EditProModal.propTypes = {
  //   isAuthenticated: PropTypes.bool
  // testmodal: PropTypes.func.isRequired,
  // sumbitProduct: PropTypes.func.isRequired,
  // categories: PropTypes.func.isRequired,
  // products: PropTypes.object
  categories: PropTypes.func.isRequired,
  sumbitProduct: PropTypes.func.isRequired,
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
  { sumbitProduct, categories }
)(EditProModal);
