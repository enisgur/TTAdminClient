import {
  CATEGORIES,
  SUBMITPRODUCT,
  SUBMITCATEG,
  SUBMITBRAND,
  MODAL
} from '../actions/types';

const initialState = {
  categories: null,
  loading: true,
  lastSubmitProduct: null,
  isModal: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: payload
      };
    case SUBMITPRODUCT:
      return {
        ...state,
        loading: false,
        lastSubmitProduct: payload
      };
    case SUBMITCATEG:
    case SUBMITBRAND:
      return {
        ...state,
        loading: false
      };
    case MODAL:
      return {
        ...state,
        loading: false,
        isModal: payload
      };

    default:
      return state;
  }
}
