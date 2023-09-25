import {call, put, takeEvery} from 'redux-saga/effects';
import { GET_FETCH, GET_SUCCESS} from  './actions';

function dataFetch(){
return fetch('http://localhost:3005/data').then(response=>response.json())
}

function* workGetUsersFetch(){
const data=yield call (dataFetch);
yield put({type:GET_SUCCESS, data})
}

function* mySaga(){
yield takeEvery(GET_FETCH, workGetUsersFetch);
}
 export default mySaga;