import { combineReducers, createStore } from "redux";
import { BookingReducer } from "./Reducers/BookingReducer";

const rootReducer = combineReducers({
    BookingReducer,
});

export const store = createStore(rootReducer);