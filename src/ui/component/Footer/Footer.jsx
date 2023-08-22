import pageIcon from "../../assets/sheet.svg";
import style from './Footer.module.css';


const Footer = () => {
    return (
        <div className={style.footerWrapper}>
            <img src={pageIcon} alt="formula" />
            <div className={style.sheets}>
                <span className={style.sheet}>Sheet 1</span>
            </div>
        </div>
    );
};


export default Footer;