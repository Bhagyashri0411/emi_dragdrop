import { applyMiddleware, combineReducers, createStore } from "redux";
import { userLoginReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";  // Correct import statement

const reducer = combineReducers({
    userLogin: userLoginReducer
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
