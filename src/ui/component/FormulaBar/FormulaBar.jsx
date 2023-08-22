import formulaIcon from "../ui/assets/formula.svg";
const FormulaBar = () => {
    const formulaChangeHandler = () => {

    };
    return (
        <div className="bg-bg-2 flex gap-4 px-5 py-3">
            <input readOnly className={"w-14 h-6 outline-none text-center"} value={cell} />
            <img src={formulaIcon} className={"h-6"} />
            <input className={"w-screen outline-none px-3"} value={formula} onChange={formulaChangeHandler} />
        </div>
    );
};

export default FormulaBar;