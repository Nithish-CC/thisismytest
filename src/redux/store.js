import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { TodoReducer } from "../redux/reducer/todo_reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
	Todo: TodoReducer,
});

let initalValues = {};

// const store = createStore(
//     reducer,
//     initalValues,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeView = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initalValues, composeView(applyMiddleware(thunk)));

export default store;
