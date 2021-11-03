import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import authReducer from "./authReducer";
// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  authReducer,
});

export default rootReducer;