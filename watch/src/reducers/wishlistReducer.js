const initState = {
  list: [],
  checkHeart : false,
};
export default function listReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_LIST":
      const checkExist = state.list.find(e => e.IDProduct  === action.detail.IDProduct )
      const newlistReducer = checkExist 
        ?
        // truong hợp đã có sản phẩm đấy trong list
        state.list?.map(e => {
          if (e.IDProduct  === action.detail.IDProduct ) {
            return ({ 
              ...e,
            })
          }
          return e
        })
        // truong hợp sản phẩm đấy không nằm trong list
        : [...state.list, { ...action.detail, checkHeart: true }]

      return {
        ...state,
        list: newlistReducer
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        checkHeart: false,
        list: state.list.filter(e => e.IDProduct  !== action.data.IDProduct )
      };
      
    default:
      return state;
  }
}