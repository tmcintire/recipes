import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api';

function* initialize() {
  yield call(api.fetchRecipes);
}

export default function* saga() {
  yield* takeEvery(actions.INITIALIZED, initialize);
}
