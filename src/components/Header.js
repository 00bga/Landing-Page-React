import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <nav>
            <a className={styles.logo} href=""><span className={styles.aPlus}>A+</span>Studio</a>
            <div className={styles.navigation}>
                <a href="" className={styles["navigation-items"]}>Home</a>
                <a href="" className={styles["navigation-items"]}>What We Do</a>
                <a href="" className={styles["navigation-items"]}>Service</a>
                <a href="" className={styles["navigation-items"]}>Project</a>
                <a href="" className={styles["navigation-items"]}>Blog</a>
                <a href="" className={styles["navigation-items"]}>Contact</a>
            </div>
        </nav>
    );
}

export default Header;