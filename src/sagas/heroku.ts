import { put, takeLatest, call, fork, all } from 'redux-saga/effects';
import types from '../modules/actionTypes';
import Action, {
  getAllFarms,
  postNewFarm,
  putNewContribution,
} from '../modules/action';
import * as api from '../services/api';

function* runGetAllFarms() {
  try {
    const result = yield call(api.getAllFarms);
    yield put(getAllFarms.succeed(result));
  } catch (error) {
    yield put(getAllFarms.fail(error));
  }
}

function* runPostNewFarm(action: Action) {
  try {
    const { data } = action.payload;
    // ファームの追加
    yield api.postNewFarm(data);
    // ファームの再取得
    // TODO: 全件取ってくる必要はない
    const result = yield call(api.getAllFarms);
    yield put(postNewFarm.succeed(result));
  } catch (error) {
    yield put(postNewFarm.fail(error));
  }
}

function* runPutNewContribution(action: Action) {
  try {
    const { _id, data } = action.payload;
    // コントリビューションの追加
    yield api.putNewContribution(_id, data);
    // ファームの再取得
    // TODO: 全件取ってくる必要はない
    const result = yield call(api.getAllFarms);
    yield put(putNewContribution.succeed(result));
  } catch (error) {
    yield put(putNewContribution.fail(error));
  }
}

export function* watchGetAllFarms() {
  yield takeLatest(types.GET_ALL_FARMS_START, runGetAllFarms);
}

export function* watchPostNewFarm() {
  yield takeLatest(types.POST_NEW_FARM_START, runPostNewFarm);
}

export function* watchPutNewContribution() {
  yield takeLatest(types.PUT_NEW_CONTRIBUTION_START, runPutNewContribution);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllFarms),
    fork(watchPostNewFarm),
    fork(watchPutNewContribution),
  ]);
}
