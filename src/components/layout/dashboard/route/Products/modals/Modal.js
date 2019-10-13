import React, { Component, Fragment } from 'react';
// import ReactDom from 'react-dom';
// import { store } from '../../../../../../store';
// import { Provider } from 'react-redux';

class Modal extends Component {
  render() {
    let dialog = (
      <Fragment>
        <div className="modalOverlay" onClick={this.props.onClose}></div>
        <div className="dialogStyles">
          <button className="closeButton" onClick={this.props.onClose}>
            x
          </button>

          <div>{this.props.children}</div>
        </div>
      </Fragment>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }

    return <div>{dialog}</div>;
  }
}

export default Modal;
