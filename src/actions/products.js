import axios from 'axios';

import { setAlert } from './alert';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CATEGORIES,
  SUBMITPRODUCT,
  SUBMITCATEG,
  SUBMITBRAND,
  MODAL
} from './types';
import setAuthToken from '../utils/setAuthToken';
// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Get Categories
export const categories = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/products/categories');

    dispatch({
      type: CATEGORIES,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      return console.log(errors);
    }
  }
};

// SUBMIT PRODUCT
export const sumbitProduct = ({
  picture,
  category,
  brand,
  product,
  description
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  // const body = JSON.stringify({
  //   picture,
  //   category,
  //   brand,
  //   product,
  //   description
  // });

  console.log(picture);
  const formData = new FormData();
  formData.append('picture', picture);
  formData.append('category', category);
  formData.append('brand', brand);
  formData.append('product', product);
  formData.append('description', description);

  try {
    const res = await axios.post(
      '/api/products/submitproduct',
      formData,
      config
    );
    dispatch({
      type: SUBMITPRODUCT,
      payload: res.data
    });
    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    //   if (errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //   }

    //   dispatch({
    //     type: REGISTER_FAIL
    //   });
    // }

    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      console.log(errors);
    }

    // dispatch({
    //   type: REGISTER_FAIL
    // });
  }
};
// SUBMIT PRODUCT END()

// SUBMIT CATEG
export const sumbitCateg = ({ name, brands }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    name,
    brands
  });

  try {
    const res = await axios.post('/api/products/submitcateg', body, config);

    dispatch({
      type: SUBMITCATEG,
      payload: res.data
    });

    dispatch(categories());

    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log(errors);
    }
  }
};
// SUBMIT CATEG END()

// SUBMIT BRAND
export const submitBrand = ({ brands, categ }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    brands,
    categ
  });

  // console.log('from Action Brands :', brands);

  try {
    const res = await axios.post('/api/products/submitbrand', body, config);

    dispatch({
      type: SUBMITBRAND,
      payload: res.data
    });

    dispatch(categories());

    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log(errors);
    }
  }
};
// SUBMIT BRAND END()

// Modal
export const modal = data => async dispatch => {
  try {
    dispatch({
      type: MODAL,
      payload: data
    });
  } catch (err) {
    console.error(err);
  }
};

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// DELETE BELLOW ITS JUST THE EXAMPLE
// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// LOGOUT / Clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
