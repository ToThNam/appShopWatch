const initState = {
  quantity: 1,
  cart: [],
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CART":
      const checkExist = state.cart.find(e => e.IDProduct  === action.detail.IDProduct )
      const newCart = checkExist 
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
        cart: newCart
      };
    case "REDUCE_ITEM":
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
    case "REMOVE_ALL":
      return {
        ...state,
        cart: []
        // quantity: state.quantity + 1
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(e => e.IDProduct  !== action.data.IDProduct )
        // quantity: state.quantity + 1
      };
      
    default:
      return state;
  }
}