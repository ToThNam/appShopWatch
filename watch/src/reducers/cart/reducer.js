import { ACTION_TYPES } from "./types";
const initState = {
  quantity: 1,
  cart: [],
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      const checkExist = state.cart.find(e => e.IDProduct  === action.detail.IDProduct )
        ?
        // truong hợp đã có sản phẩm đấy trong list
        state.cart?.map(e => {
          if (e.IDProduct  === action.detail.IDProduct ) {
            return ({ ...e, quantity: e.quantity + 1 })
          }
          return e
        })
        // truong hợp sản phẩm đấy không nằm trong list
        : [...state.cart, { ...action.detail, quantity: 1 }]

      return {
        ...state,
        cart: checkExist
      };
    case ACTION_TYPES.REDUCE_ITEM:
      const newCartReduce = action.detail.quantity === 1
        ? state.cart.filter(e => e.IDProduct  !== action.detail.IDProduct ) :
        // truong hợp đã có sản phẩm đấy trong list
        state.cart?.map(e => {
          if (e.IDProduct  === action.detail.IDProduct ) {
            return ({ ...e, quantity: e.quantity - 1 })
          }
          return e
        })

      return {
        ...state,
        cart: newCartReduce
      };
    case ACTION_TYPES.REMOVE_ALL:
      return {
        ...state,
        cart: []
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(e => e.IDProduct  !== action.data.IDProduct )
      };
      
    default:
      return state;
  }
}