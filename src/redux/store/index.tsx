import { createStore, Store, applyMiddleware } from "redux";
import reducer from "../reducers";
import ReduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const middleWares: any = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middleWares.push(logger);
}
export function makeStore(): Store {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, ...middleWares))
  );
}

const store = makeStore();

export { store };
