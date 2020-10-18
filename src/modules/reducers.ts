import types from './actionTypes';
import Action from './action';
import { FarmDocument } from '../interfaces';

export interface State {
  farms: FarmDocument[];
  isLoading: boolean;
  error?: boolean;
}

export const initialState: State = {
  farms: [],
  isLoading: false,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    // ファームの全件取得
    case types.GET_ALL_FARMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_FARMS_SUCCEED:
      return {
        ...state,
        farms: action.payload.result,
        isLoading: false,
      };
    case types.GET_ALL_FARMS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    // ファームの新規作成
    case types.POST_NEW_FARM_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_NEW_FARM_SUCCEED:
      return {
        ...state,
        farms: action.payload.result,
        isLoading: false,
      };
    case types.POST_NEW_FARM_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    // ファームにコントリビューションを追加
    case types.PUT_NEW_CONTRIBUTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.PUT_NEW_CONTRIBUTION_SUCCEED:
      return {
        ...state,
        farms: action.payload.result,
        isLoading: false,
      };
    case types.PUT_NEW_CONTRIBUTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
