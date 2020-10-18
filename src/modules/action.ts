import types from './actionTypes';
import { PostFarm } from '../interfaces';

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
    payload: { result },
  }),
  fail: (error: any) => ({
    type: types.GET_ALL_FARMS_FAIL,
    payload: { error },
    error: true,
  }),
};

export const postNewFarm: SagaAction = {
  start: (data: PostFarm) => ({
    type: types.POST_NEW_FARM_START,
    payload: { data },
  }),
  succeed: (result: any) => ({
    type: types.POST_NEW_FARM_SUCCEED,
    payload: { result },
  }),
  fail: (error: any) => ({
    type: types.POST_NEW_FARM_FAIL,
    payload: { error },
    error: true,
  }),
};

export const putNewContribution: SagaAction = {
  start: (payload) => ({
    type: types.PUT_NEW_CONTRIBUTION_START,
    payload,
  }),
  succeed: (result: any) => ({
    type: types.PUT_NEW_CONTRIBUTION_SUCCEED,
    payload: { result },
  }),
  fail: (error: any) => ({
    type: types.PUT_NEW_CONTRIBUTION_FAIL,
    payload: { error },
    error: true,
  }),
};
