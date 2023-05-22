import { createStore } from "redux";
import cartReducers from "../reducers/cartReducers.tsx";

const store = createStore(cartReducers);
console.log("store323:", store);

export default store;
