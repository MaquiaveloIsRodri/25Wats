//import Button from "../../atoms/Button/Button";
import Links from "../../atoms/Links/Links";
import styles from "./NavigationBar.module.css"
import styleButton from "../../atoms/ButtonSelect/Button.module.css";
import ButtonSelect from "../../atoms/ButtonSelect/ButtonSelect";
//import { useOpenMenu } from "../../../hooks/UseOpenMenu";
import React, { useState, useEffect } from 'react';

const NavigationBar = ({ link, click, setClick }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 563px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 563px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <div >
            {matches &&
                <nav className={[styles.nav, styles.disable]}>
                    <ul className={styles.nav__list}>
                        <ButtonSelect onClick={setClick} style={styleButton.closeMenu}>Close</ButtonSelect>
                        {link.map((links) => (
                            <Links key={links.id}>{links.label}</Links>
                        ))}
                    </ul>
                </nav>}
            {!matches &&
                <nav className={click ? styles.nav : styles.visible}>
                    <ul className={click ? styles.nav__list : styles.invisible}>
                        <ButtonSelect onClick={setClick} style={styleButton.closeMenu}>Close</ButtonSelect>
                        {link.map((links) => (
                            <Links key={links.id}>{links.label}</Links>
                        ))}
                    </ul>
                </nav>}
        </div>
    );
};

export default NavigationBar;
//styles.nav  styles.nav__list



