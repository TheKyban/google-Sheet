import { useSelector } from "react-redux";
import { rows, columns } from "../constant";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useFormulaContext } from "../SheetContext";

const Sheet = () => {

    return (
        <div
            className={
                "bg-bg-2 h-[calc(100vh-44px-48px-48px-36px)] w-full overflow-auto flex"
            }
        >
            <NumberColumn />
            <div>
                <AlphabetRow />
                <Cells />
            </div>
        </div>
    );
};

const NumberColumn = () => {
    return (
        <div>
            <span className="w-10 h-8 bg-bg-1 block border-2 border-bg-1 text-center"></span>
            <div className="flex flex-col">
                {Array(rows)
                    .fill(" ")
                    .map((v, i) => (
                        <span
                            className=" border-color-1 border-2 border-b-0 last:border-b-2 w-10  h-8 flex items-center justify-center"
                            key={`Number${i}`}
                        >
                            {i + 1}
                        </span>
                    ))}
            </div>
        </div>
    );
};

const AlphabetRow = () => {
    return (
        <div className="flex items-center">
            {Array(columns)
                .fill("")
                .map((v, i) => {
                    let Alphabet = String.fromCharCode(65 + i);
                    return (
                        <span
                            key={`Alpha${i}`}
                            className="border-2 border-color-1 border-l-0 border-b-0 w-20 h-8 flex items-center justify-center"
                        >
                            {Alphabet}
                        </span>
                    );
                })}
        </div>
    );
};

const Cells = memo(() => {
    const db = useSelector(slice => slice.db.db);
    console.log("rendering");

    const [clicked, setClicked] = useState(false);
    const { setCell, setFormula } = useFormulaContext();



    const clickHandler = useCallback((e, db) => {
        console.log(db?.alignment);

        if (!clicked) {
            setClicked(true);
            const name = e.target.name;
            setCell(name);
            setFormula(db?.formula);
        }
    });

    const blurHandler = useCallback(() => {
        setClicked(false);
    }, []);

    return (
        <>
            {Array(rows)
                .fill("")
                .map((e, i) => (
                    <div
                        className="flex items-center last:border-b-2 border-color-1"
                        key={i}
                    >
                        {Array(columns)
                            .fill("")
                            .map((v, j) => {
                                let Alphabet = String.fromCharCode(65 + j);
                                return (
                                    <Cell
                                        key={`${i}${j}`}
                                        name={`${Alphabet}${i + 1}`}
                                        db={db?.[i]?.[j]}
                                        blurHandler={blurHandler}
                                        clickHandler={clickHandler}
                                    />
                                );
                            })}
                    </div>
                ))}
        </>
    );
});

const Cell = memo(({ name, db, blurHandler, clickHandler }) => {
    console.log(db?.alignment);


    return (
        <input
            type="text"
            name={name}
            className={`outline-none border-2 border-color-1  border-l-0 border-b-0 w-20 h-8`}
            style={{
                fontSize: `${db?.fontSize}px`,
                fontFamily: `${db?.fontFamily}`,
                fontWeight: `${db?.bold ? "bold" : "normal"}`,
                fontStyle: `${db?.italic ? "italic" : "normal"}`,
                textDecoration: `${db?.underline ? "underline" : "none"}`,
                textAlign: `${db?.alignment}`,
                color: `${db?.color}`,
                backgroundColor: `${db?.bg}`
            }}
            onClick={(e) => clickHandler(e, db)}
            onBlur={blurHandler}
        ></input>
    );
});

export default Sheet;
