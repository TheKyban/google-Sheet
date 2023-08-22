import style from "./FileMenu.module.css";


const FileMenu = () => {
    return (
        <div className={`${style.fileMenuWrapper}`}>
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">File</h1>
            <h1 className="cursor-pointer">Insert</h1>
            <h1 className="cursor-pointer">Layout</h1>
            <h1 className="cursor-pointer">Help</h1>
        </div>
    );
};

export default FileMenu;