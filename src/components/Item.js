import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {changeItemCount, removeItem} from "../actions";
import styles from '../styles/Item/index.module.scss';

class Item extends Component {

  onSelect = (e) => {
    const {dispatch, item: {id}} = this.props;
    dispatch(changeItemCount(id, e.target.value));
  };

  onDelete = () => {
    const {dispatch, item: {id}} = this.props;
    dispatch(removeItem(id));
  };

  render() {
    const {item} = this.props;

    return (
      <div className={styles.item}>
        <div className={styles.logo}>
          <img src={item.avatar} alt="item"/>
        </div>
        <div className={styles.content}>
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </div>
        <div className={styles.actions}>
          <i className={classNames(styles.remove, 'material-icons')} onClick={this.onDelete}>delete</i>
          <select onChange={this.onSelect} value={item.count}>
            {Array(101).fill(1).map((a, index) => <option key={index}>{index}</option>)}
          </select>
          <span className={styles.price}>
            {item.price * item.count} $
          </span>
        </div>
      </div>
    )
  }
}

export default connect()(Item);