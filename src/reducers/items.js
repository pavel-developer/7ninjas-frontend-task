import {RECEIVE_ITEMS, REQUEST_ERROR, REQUEST_ITEMS, REMOVE_ITEM, CHANGE_ITEM_COUNT} from '../actions/index'

const initState = {
  loading: false,
  error: false,
  items: []
};

const mockItems = (state = initState, action) => {
  let index;
  switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        loading: true
      });
    case REQUEST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.code
      });
    case RECEIVE_ITEMS:
      action.items.forEach(item => Object.assign(item, {count: 1}));
      return Object.assign({}, state, {
        loading: false,
        error: false,
        items: action.items
      });
    case REMOVE_ITEM:
      index = state.items.findIndex(item => item.id === action.id);
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      });
    case CHANGE_ITEM_COUNT:
      index = state.items.findIndex(item => item.id === action.id);
      const newItem = Object.assign({}, state.items[index], {count: action.count});
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, index),
          newItem,
          ...state.items.slice(index + 1)
        ]
      });

    default:
      return state;
  }
};

export default mockItems;