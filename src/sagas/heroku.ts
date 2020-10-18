import { put, takeLatest, call, fork, all } from 'redux-saga/effects';
import axios from 'axios';
import types from '../modules/actionTypes';
import Action from '../modules/action';
import { getAllFarms } from '../modules/action';

function* runGetAllFarms(action: Action) {
  try {
    const api = () =>
      // [GET] axios で APIサーバーからファームを全件取得
      axios({
        method: 'get',
        // url: 'http://localhost:5000/api/v1/farm/',
        url: 'https://faam-app.herokuapp.com/api/v1/farm/',
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });

    const result = yield call(api);
    yield put(getAllFarms.succeed(result));
  } catch (error) {
    yield put(getAllFarms.fail(error));
  }
}

export function* watchGetAllFarms() {
  yield takeLatest(types.GET_ALL_FARMS_START, runGetAllFarms);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllFarms)]);
}
