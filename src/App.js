import EditMenu from "./ui/component/EditMenu/EditMenu";
import FileMenu from "./ui/component/FileMenu/FileMenu";
import Footer from "./ui/component/Footer/Footer";
import FormulaBar from "./ui/component/FormulaBar/FormulaBar";
import Sheet from "./ui/component/Sheet/Sheet";

const App = () => {
    return (
        <>
            <FileMenu />
            <EditMenu />
            <FormulaBar />
            <Sheet />
            <Footer />
        </>
    );
};

export default App;