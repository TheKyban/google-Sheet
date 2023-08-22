import { useEffect, useState } from "react";
import { setFormula } from "../../../controllers/store/slices/formulaBarSlice";
import formulaIcon from "../../assets/formula.svg";
import style from "./FormulaBar.module.css";
import { useDispatch, useSelector } from "react-redux";

const FormulaBar = () => {
    const { cell, formula } = useSelector((slice) => slice.formulaBar);
    const dispatch = useDispatch();
    const [localFormula, setLocalFormula] = useState(formula);

    const handleEnter = (e) => {
        if ((e.key == "Enter" && formula !== localFormula)) {
            dispatch(setFormula(localFormula));
        }
    };

    useEffect(() => {
        setLocalFormula(formula);
    }, [formula]);

    return (
        <div className={style.FormulaBarWrapper}>
            <input readOnly value={cell} />
            <img src={formulaIcon} alt="formula Icon" />
            <input
                value={localFormula}
                onChange={(e) => setLocalFormula(e.target.value)}
                onKeyDown={handleEnter}
            />
        </div>
    );
};

export default FormulaBar;
