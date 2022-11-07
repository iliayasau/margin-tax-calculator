import { put, call, takeEvery } from 'redux-saga/effects';
import { SET_LOADING, GET_TAX, GET_TAX_REQUESTED } from '../actions';
import { getTax } from '../api';

function* fetchTax({ payload }) {
  yield put({ type: SET_LOADING });

	const tax = yield call(getTax, payload);
  yield put({ type: GET_TAX, payload: tax })
};

export default function* rootSaga() {
  yield takeEvery(GET_TAX_REQUESTED, fetchTax)
};