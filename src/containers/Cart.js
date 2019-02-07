import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {fetchItems} from '../actions/index';
import { connect } from 'react-redux'
import styles from '../styles/Cart/index.module.scss';
import Item from '../components/Item';
import {Spinner} from '../components/Spinner';

class Cart extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
  }

  totalPrice = () => {
    const {items} = this.props;

    return items.reduce((acc, item) => {
      acc += item.price * item.count;
      return acc;
    }, 0)
  };

  render() {
    const {items, loading, history, error} = this.props;

    return (
      <>
        {error ? <h1>{error} code. Something went wrong! Try again</h1> :
          loading ? <Spinner /> :
            (
              <div className={styles.wrapper}>
                <div className={styles.container}>
                  {items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </div>
                <span className={styles.price}>{this.totalPrice()} $</span>
                <button className={styles.buy} onClick={() => history.push('/shipping')}>BUY</button>
              </div>
            )
        }
      </>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {mockItems: {items, loading, error}} = state;
  return {
    loading,
    error,
    items
  };
};

export default connect(mapStateToProps)(Cart);