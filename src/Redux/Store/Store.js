import { createStore } from "redux";
import reducer from "../Reducers/Reducer";

const Store = createStore(
  reducer,

  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
export default Store;
