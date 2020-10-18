import axios from 'axios';
import { Contribution, PostFarm } from '../interfaces';

const url = 'https://faam-app.herokuapp.com/api/v1/farm/';

/**
 * [GET] axios で APIサーバーからファームを全件取得
 */
export const getAllFarms = () =>
  axios({
    method: 'get',
    // url: 'http://localhost:5000/api/v1/farm/',
    url,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

/**
 * [POST] axios で ファームを追加
 * @param data 送信する値
 */
export const postNewFarm = (data: PostFarm) =>
  axios({
    method: 'post',
    // url: `http://localhost:5000/api/v1/farm/`,
    url,
    data,
  })
    .then((_res) => {
      alert('カレンダーを追加しました');
    })
    .catch((err) => {
      throw err;
    });

export const putNewContribution = (_id: string, data: Contribution) =>
  axios({
    method: 'put',
    // url: `http://localhost:5000/api/v1/farm/${_id}/contribution`,
    url: `${url}${_id}/contribution/`,
    data,
  })
    .then((_res) => {
      alert('達成を記録しました! えらい!');
    })
    .catch((err) => {
      throw err;
    });
