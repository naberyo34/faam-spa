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
    case types.GET_ALL_FARMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_FARMS_SUCCEED:
      return {
        ...state,
        farms: action.payload,
        isLoading: false,
      };
    case types.GET_ALL_FARMS_FAIL:
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
