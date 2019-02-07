import React, { Component } from 'react';
import ShippingForm from '../components/Form';
import styles from '../styles/ShippingForm/index.module.scss';

class Shipping extends Component {

  submit = (data) => console.log(data);

  render() {
    return (
      <div className={styles.wrapper}>
        <ShippingForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default Shipping;