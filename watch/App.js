import React from 'react'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './src/reducers';
import AppStack from './src/navigation/AppStack';
import thunk from 'redux-thunk';
let store = createStore(rootReducer, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  )
}

