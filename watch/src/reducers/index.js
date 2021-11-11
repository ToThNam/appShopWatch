import { combineReducers } from "redux";
import listReducer from "./wishList/reducer";
import authReducer from "./authentication/reducer";
import cartReducer from "./cart/reducer";
const rootReducer = combineReducers({
  cartReducer,
  listReducer,
  authReducer,
});

export default rootReducer;