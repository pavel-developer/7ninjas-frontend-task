import axios from 'axios';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT';

const requestItems = () => ({
  type: REQUEST_ITEMS
});

const requestError = (code) => ({
  type: REQUEST_ERROR,
  code
});

const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id
});

export const changeItemCount = (id, count) => ({
  type: CHANGE_ITEM_COUNT,
  id,
  count
});

export function fetchItems() {
  return function action(dispatch) {
    dispatch(requestItems());

    const request = axios({
      method: 'GET',
      url: 'http://5c5ae1f31041df0014b3ee84.mockapi.io/products',
      headers: []
    });

    return request.then(
      res => dispatch(receiveItems(res.data)),
      error => dispatch(requestError(error.response.status))
    );
  }
}