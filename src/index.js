import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux'
import  createSagaMiddleware  from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import mySaga from './saga';
import myReducer from './reducer';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { myReducer },
  middleware: [saga]
})
saga.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

export default App;
 



