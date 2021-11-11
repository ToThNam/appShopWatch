import { ACTION_TYPES } from "./types";
const initState = {
  list: [],
  checkHeart : false,
};
export default function listReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LIST:
      const checkExist = state.list.find(e => e.IDProduct  === action.detail.IDProduct )?
         state.list.filter(e => e.IDProduct  !== action.detail.IDProduct )
        : [...state.list, { ...action.detail, checkHeart: true }]

      return {
        ...state,
        list: checkExist
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        checkHeart: false,
        list: state.list.filter(e => e.IDProduct  !== action.data.IDProduct )
      };
      
    default:
      return state;
  }
}