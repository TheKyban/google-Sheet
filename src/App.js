import EditMenu from "./ui/component/EditMenu/EditMenu";
import FileMenu from "./ui/component/FileMenu/FileMenu";
import FormulaBar from "./ui/component/FormulaBar/FormulaBar";

const App = () => {
    return (
        <>
            <FileMenu />
            <EditMenu />
            <FormulaBar />
        </>
    );
};

export default App;