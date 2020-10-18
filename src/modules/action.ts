import types from './actionTypes';

export default interface Action {
  type: string;
  payload?: any;
  error?: boolean;
}

export interface SagaAction {
  start: (payload?: any) => Action;
  succeed: (payload?: any) => Action;
  fail: (payload?: any) => Action;
}

export const getAllFarms: SagaAction = {
  start: () => ({
    type: types.GET_ALL_FARMS_START,
  }),
  succeed: (result: any) => ({
    type: types.GET_ALL_FARMS_SUCCEED,
    payload: result,
  }),
  fail: (error: any) => ({
    type: types.GET_ALL_FARMS_FAIL,
    payload: error,
    error: true,
  }),
};
