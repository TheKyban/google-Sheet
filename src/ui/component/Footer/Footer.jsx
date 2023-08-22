import pageIcon from "../assets/sheet.svg";

const Footer = () => {
    return (
        <div className={"flex items-center gap-5 py-1 px-5 bg-bg-2"}>
            <img src={pageIcon} className={"w-7"}/>
            <div className="">
                <span className={"font-semibold border-b-2 border-black"}>Sheet 1</span>
            </div>
        </div>
    );
};


export default Footer;