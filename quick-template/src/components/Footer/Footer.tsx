import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Mi Proyecto Next.js</span>
    </footer>
);

export default Footer;
