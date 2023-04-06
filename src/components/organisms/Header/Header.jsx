import React from 'react';
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import LogoBussines from "../../../assets/img/logo_25w.png"
import styleButton from "../../atoms/ButtonSelect/Button.module.css";
import ButtonSelect from "../../atoms/ButtonSelect/ButtonSelect";
import { useOpenMenu } from "../../../hooks/UseOpenMenu";
import './Header.css';



const Header = ({ links }) => {
    const [click, onClick] = useOpenMenu(false);
    return (
        <header className="header">
            <img src={LogoBussines} alt="Logo" className="header__logo" />
            <ButtonSelect onClick={onClick} style={styleButton.openMenu} >Open</ButtonSelect>
            <NavigationBar link={links} click={click} setClick={onClick}></NavigationBar>
        </header>
    )

}

export default Header;
