import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import OptionsSelect from './OptionsSelect';
import styles from '../styles/ShippingForm/index.module.scss';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (values.phone) {
    if (values.phone.length !== 9) {
      errors.phone = 'Must be 9 characters';
    } else if (! /^[\+]?\d{8,9}$/.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid e-mail';
  }

  return errors;
};

const renderField = ({
                       input,
                       label,
                       type,
                       placeholder,
                       meta: { touched, error }
                     }) => (
  <div className={styles.block}>
    <label className={styles.label}>{label}</label>
    <div className={styles.fieldWrapper}>
      <input className={classNames(styles.field, {[styles.invalid]: (touched && error)})}
             {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className={styles.error}>{error}</span>}
    </div>
  </div>
);

const renderSelect = ({
                        input,
                        label,
                        meta: { touched, error }
                     }) => (
  <div className={styles.block}>
    <label className={styles.label}>{label}</label>
    <div className={styles.fieldWrapper}>
      <OptionsSelect {...input} />
      {touched && error && <span className={styles.error}>{error}</span>}
    </div>
  </div>
);

let Form = props => {

  const { handleSubmit, invalid } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Field name="name" type="text" label="Name*" component={renderField} />
      <Field name="address" type="text" label="Address*" component={renderField} />
      <Field name="phone" type="tel" placeholder="+48" label="Phone" component={renderField} />
      <Field name="email" type="email" label="E-mail" component={renderField} />
      <Field name="options" label="Shipping options" component={renderSelect} />
      <button type="submit" className={styles.submit} disabled={invalid}>pay</button>
    </form>
  );

};

Form = reduxForm({
  form: 'shipping',
  validate
})(Form);

export default Form;