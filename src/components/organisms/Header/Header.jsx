import HeaderLogo from "../../atoms/HeaderLogo/Logo";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";



const Header = ({ links, Logo, Alt }) => {
    return (
        <header>
            <HeaderLogo img={Logo} alt={Alt}></HeaderLogo>
            <NavigationBar link={links}></NavigationBar>
        </header>
    )

}

export default Header;
