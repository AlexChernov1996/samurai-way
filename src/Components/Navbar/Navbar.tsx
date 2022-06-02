import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink className={() => styles.list} activeClassName={styles.listActive}
                     to="/profile">Profile</NavLink>
            <NavLink className={() => styles.list} activeClassName={styles.listActive}
                     to="/users">Friends</NavLink>
            <NavLink className={() => styles.list} activeClassName={styles.listActive}
                     to="/dialogs"> Dialogs</NavLink>
            <NavLink className={() => styles.list} activeClassName={styles.listActive}
                     to="/music"> Music </NavLink>
            <NavLink className={() => styles.list} activeClassName={styles.listActive}
                     to="/settings">Settings</NavLink>
        </div>
    )
};

export default Navbar;
