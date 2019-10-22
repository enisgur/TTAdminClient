import React, { Fragment, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProducts, modal } from '../../../../../actions/products';

import Modal from './modals/Modal';
import EditProModal from './modals/EditProModal';

const Products = ({ getProducts, products, modal }) => {
  useEffect(() => {
    getProducts();
    // dispatch(categories());
    return () => modal(false);
  }, [getProducts, modal]);

  const editProductContent = () => {
    return <EditProModal pro={selectedProduct} />;
  };

  const [modalEdit, setModalEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const onClick = pro => {
    setModalEdit(true);
    products.isModal ? modal(false) : modal(true);
    setSelectedProduct(pro);
    console.log('from: ShowProducts > onClick', pro);
    // console.log(e.target.name);
    // searchCategory(e.target.name);
  };

  const page = (
    <Fragment>
      <div className="table-responsive">
        <h1>Booking</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Product</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.allProducts
              ? products.allProducts.map((pro, index) => {
                  return (
                    <tr key={pro._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{pro.brand}</td>
                      <td>{pro.product}</td>
                      <td>
                        <button
                          name={pro._id}
                          className="btn btn-warning"
                          onClick={() => onClick(pro)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <div className="links">
          {/* <Link to="/dashboard/wellcome">wellcome</Link> <br />
          <Link to="/dashboard/">go Back</Link> <br /> */}
          <span>test</span>
        </div>
      </div>
      {modalEdit && (
        <Modal isOpen={products.isModal} onClose={e => modal(false)}>
          {editProductContent()}
        </Modal>
      )}
    </Fragment>
  );

  return page;
};

Products.propTypes = {
  //   isAuthenticated: PropTypes.bool
  modal: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object
};

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  //   isAuthenticated: state.auth.isAuthenticated
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts, modal }
)(Products);
