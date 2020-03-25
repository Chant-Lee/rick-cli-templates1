export interface HomeState {
  list: any;
  total: number;
}

export const INITIAL_STATE: HomeState = {
  list: [],
  total: 20
};
export type Action =
  | {
      type: "RECEIVE_HOME";
      list: any;
    }
  | {
      type: "RECEIVE_HOME_ERROR";
    };

export const RECEIVE_HOME = "RECEIVE_HOME";
export const RECEIVE_HOME_ERROR = "RECEIVE_HOME_ERROR";
