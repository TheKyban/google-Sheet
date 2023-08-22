import { useState } from "react";
import formulaIcon from "../../assets/formula.svg";
import style from './FormulaBar.module.css';


const FormulaBar = () => {
    const [cell] = useState("A1");
    const [formula, setFormula] = useState("This is Formula");
    const formulaChangeHandler = (e) => {
        setFormula(e.target.value);
    };
    return (
        <div className={style.FormulaBarWrapper}>
            <input readOnly value={cell} />
            <img src={formulaIcon} alt="formula Icon" />
            <input value={formula} onChange={formulaChangeHandler} />
        </div>
    );
};

export default FormulaBar;