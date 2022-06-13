import React from 'react';
import preloader from '../../commons/img/preloader.svg'
import s from './preloader.module.css'
type PreloaderPropsType = {
    isActive: boolean
}

const Preloader = (props:PreloaderPropsType) => {
    return (
        <>
            <img src={preloader} alt="Loading" className={props.isActive?`${s.active}`:`${s.disabled}`}/>
        </>
    );
};

export default Preloader;
