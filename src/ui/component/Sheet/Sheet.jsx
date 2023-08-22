import React, { memo, useCallback, useState } from "react";
import style from "./Sheet.module.css";
import { rows, columns } from '../../../constants/constant';

const Sheet = () => {
    return (
        <div
            className={style.sheetWrapper}
        >
            <NumberColumn />
            <div>
                <AlphabetRow />
                <Cells />
            </div>
        </div>
    );
};


const Cells = memo(() => {




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
                                        address={[i, j]}
                                    // blurHandler={blurHandler}
                                    // clickHandler={clickHandler}
                                    />
                                );
                            })}
                    </div>
                ))}
        </>
    );
});

const Cell = memo(({ name, address }) => {
    const db = {};
    const [clicked, setClicked] = useState(false);

    const clickHandler = useCallback(() => {
        if (!clicked) {
            setClicked(true);
            console.log("clicked");
        }
    }, [clicked]);


    const blurHandler = useCallback(() => {
        if (clicked) {
            setClicked(false);
            console.log("not clicked")
        }
    }, [clicked]);



    const changeHandler = useCallback(() => { }, []);
    console.log("render");


    return (
        <input
            type="text"
            name={name}
            className={style.Cell}
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
            onChange={changeHandler}
            value={db?.value}
        ></input>
    );
});




const NumberColumn = () => {
    return (
        <div>
            <span className={style.NumberColumnEmptyCell}></span>
            <div className={style.NumberColumn}>
                {Array(rows)
                    .fill(" ")
                    .map((v, i) => (
                        <span
                            className={style.NumberColumnCell}
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
        <div className={style.AlphabetRow}>
            {Array(columns)
                .fill("")
                .map((v, i) => {
                    let Alphabet = String.fromCharCode(65 + i);
                    return (
                        <span
                            key={`Alpha${i}`}
                            className={style.AlphabetCell}
                        >
                            {Alphabet}
                        </span>
                    );
                })}
        </div>
    );
};


export default Sheet;
