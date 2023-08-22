import copyIcon from "../../assets/copy.svg";
import cutIcon from "../../assets/cut.svg";
import pasteIcon from "../../assets/paste.svg";
import leftIcon from "../../assets/left.svg";
import centerIcon from "../../assets/center.svg";
import rightIcon from "../../assets/right.svg";
import boldIcon from "../../assets/bold.svg";
import italicIcon from "../../assets/italic.svg";
import underlineIcon from "../../assets/underline.svg";
import TextColorIcon from "../../assets/TextColorIcon";
import BackgroundColorIcon from "../../assets/BackgroundColorIcon";
import { useState } from "react";
import style from "./EditMenu.module.css";

const EditMenu = () => {

    const [EditMenuData, setEditMenuData] = useState({
        fontFamily: "monospace",
        fontSize: 14,
        bold: false,
        italic: false,
        underline: false,
        alignment: "center",
        color: "#000000",
        bg: "#000000"
    });
    const [textColor, setTextColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#000000");

    console.log("EditMenu render");

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "bg") {
            setBgColor(value);
        } else if (name === "color") {
            setTextColor(value);
        }

        setEditMenuData({...EditMenuData,[name]:value})
    };


    const clickHandler = (e) => {
        const name = e.target.name;
        if (name === "left" || name === "center" || name === "right") {
            setEditMenuData(pre => ({ ...EditMenuData, alignment: name }));
        } else {
            setEditMenuData(pre => ({ ...EditMenuData, [name]: !EditMenuData[name] }));
        }
    };


    return (
        <div className={`${style.editMenuWrapper}`}>
            <img src={copyIcon} className={style.copyCutPaste} alt="copy" />
            <img src={cutIcon} className={style.copyCutPaste} alt="cut" />
            <img src={pasteIcon} className={style.copyCutPaste} alt="paste" />

            <select
                onChange={changeHandler}
                name="fontFamily"
            >
                <option value="monospace">Monospace</option>
                <option value="roboto">Roboto</option>
                <option value="popins">Popins</option>
            </select>

            <select
                onChange={changeHandler}
                name="fontSize"
            >
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
            </select>

            <img
                src={boldIcon}
                name="bold"
                onClick={clickHandler}
                alt="bold"
                style={{ background: `${EditMenuData.bold ? "#d0d6d8" : ""}` }}
            />
            <img
                name="italic"
                src={italicIcon}
                onClick={clickHandler}
                alt="italic"
                style={{ background: `${EditMenuData.italic ? "#d0d6d8" : ""}` }}
            />
            <img
                name="underline"
                src={underlineIcon}
                onClick={clickHandler}
                alt="underline"
                style={{ background: `${EditMenuData.underline ? "#d0d6d8" : ""}` }}
            />
            <img
                name="left"
                src={leftIcon}
                onClick={clickHandler}
                alt="left"
                style={{ background: `${EditMenuData.alignment === "left" ? "#d0d6d8" : ""}` }}
            />
            <img
                name="center"
                src={centerIcon}
                onClick={clickHandler}
                alt="center"
                style={{ background: `${EditMenuData.alignment === "center" ? "#d0d6d8" : ""}` }}
            />
            <img
                name="right"
                src={rightIcon}
                onClick={clickHandler}
                alt="right"
                style={{ background: `${EditMenuData.alignment === "right" ? "#d0d6d8" : ""}` }}
            />

            {/* For text */}
            <div className={style.colorSelector}>
                <TextColorIcon
                    style={{ fill: `${textColor}`, width: "25px" }}
                />
                <input
                    name="color"
                    type="color"
                    onChange={changeHandler}
                    value={textColor}
                />
            </div>

            {/* For cell BG */}
            <div className={style.colorSelector}>
                <BackgroundColorIcon
                    style={{ fill: `${bgColor}`, width: "25px" }}
                />
                <input
                    name="bg"
                    type="color"
                    onChange={changeHandler}
                    value={bgColor}
                />
            </div>
        </div>
    );
};

export default EditMenu;
