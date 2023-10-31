import logo from "../../assets/icons/Logo.svg"
import user from "../../assets/icons/UsersIcon.svg"
import wordl from "../../assets/icons/wordlIcon.svg"
import notification from "../../assets/icons/notification.svg"
import './style.scss'

const Header = () => {
    
    return (
        <header className="header wrapper" >
            <div className="header-logo">
                <img src={logo} alt="Logo" className="fly" />
                <span className="logoText">E-flight</span>
            </div>
            
            <div className="header-container-icons">
                <span className="header-text">USD</span>
                <img src={wordl} alt="wordl"  />
                <img src={notification} alt="nootification" />
                <img src={user} alt="user" /> 
            </div>  
        </header>
    );
};

export default Header;
