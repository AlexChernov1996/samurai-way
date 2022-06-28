import React from 'react';
import styles from './header.module.css'

type HeaderPropsType = {
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    return (
        <div className={styles.header}>
            <img
                src="https://thumbs.dreamstime.com/b/green-tree-logo-design-simple-vector-tree-icon-green-tree-logo-design-white-background-124365698.jpg"
                alt=""/>
            {props.isAuth
                ? <button>LogOut</button>
                : <button>LogIn</button>
            }

        </div>
    );
};

export default Header;
