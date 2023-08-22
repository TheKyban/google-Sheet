import { createSlice } from "@reduxjs/toolkit";

const formulaBarSlice = createSlice({
    name: "formulaBarSlice",
    initialState: {
        cell: "A1",
        formula: "this is formula"
    },
    reducers: {
        setCell: (state, action) => {
            const name = action.payload;
            if (state.cell !== name) {
                state.cell = name;
            }
        },
        setFormula: (state, action) => {
            const formula = action.payload;
            if (state.formula !== formula) {
                state.formula = formula;
            }
        },
        setCellAndFormula: (state, action) => {
            const { name, formula } = action.payload;
            console.log(action.payload)
            if (state.cell !== name) {
                state.cell = name;
                state.formula = formula;
            }
        }
    }
});

export const { setCell, setFormula, setCellAndFormula } = formulaBarSlice.actions;
export default formulaBarSlice.reducer;