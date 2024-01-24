import { configureStore } from "@reduxjs/toolkit";
import adviceReducer from "./features/api/adviceSlice";

export const store = configureStore({
    reducer: {
        advice: adviceReducer
    }
})