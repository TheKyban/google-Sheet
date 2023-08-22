import { configureStore } from "@reduxjs/toolkit";
import formulaBarSlice from "./slices/formulaBarSlice";

const store = configureStore({
    reducer: {
        formulaBar: formulaBarSlice
    }
});

export default store;