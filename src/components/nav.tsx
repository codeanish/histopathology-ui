import { useAuthenticator } from "@aws-amplify/ui-react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.scss';
import { Button } from "@mui/material";

const Nav = () => {

    return(
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/new-workflow">New Workflow</NavLink>
                </li>
                <li><Button variant="contained" component="label" onClick={useAuthenticator().signOut}>Sign Out</Button></li>
            </ul>
            
        </nav>
    )
}

export default Nav;