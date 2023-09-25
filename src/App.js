import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.myReducer.data)
  return (<>
    <button onClick={() => dispatch(getFetch())}>show data from database</button>
    <h1>{data.map(x => <div key={x.id}>{x.name}</div>)}</h1>
  </>
  );
}
export default App;