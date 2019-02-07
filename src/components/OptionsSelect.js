import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ShippingForm/index.module.scss'

class OptionsSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      selectItems: [
        {title: 'ninjPost', value: 'free shipping'},
        {title: 'D7L', value: 'additional 15.99 plh'},
        {title: '7post', value: 'additional 7.99 plh'},
      ],
      disabled: false
    }
  }

  onChange = (e) => this.setState({selectedValue: e.target.value});

  getValue = () => {
    const {selectItems, selectedValue} = this.state;
    const item = selectItems.find(item => item.title === selectedValue);
    return item ? item.value : '';
  };

  render() {
    const {selectedValue, selectItems, disabled} = this.state;
    const {dispatch, items, ...input} = this.props;

    if (!disabled) {
      const totalPrice = items.reduce((acc, item) => {
        acc += item.price * item.count;
        return acc;
      }, 0);

      if (totalPrice >= 200) {
        this.setState({disabled: true, selectedValue: selectItems[0].title});
      }
    }

    selectItems[0].disabled = items.filter(i => +i.count !== 0).length > 3;

    return (
      <div className={styles.selectContainer}>
        <select {...input} className={styles.select} value={selectedValue} onChange={this.onChange} disabled={disabled}>
          <option></option>
          {selectItems.map((item, index) => <option key={index} disabled={item.disabled}>{item.title}</option>)}
        </select>
        <span className={styles.selectValue}>{this.getValue()}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {mockItems: {items}} = state;
  return { items };
};

export default connect(mapStateToProps)(OptionsSelect);