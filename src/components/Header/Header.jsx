import React from "react";
import { ScoreBoard } from "../";
import styles from "./Header.module.css";

const Header = ({ stats }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Memorita</h1>
            <ScoreBoard {...{ stats }} />
        </header>
    );
};

export default Header;
