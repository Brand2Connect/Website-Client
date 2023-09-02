import React from 'react';
import { Link } from "react-router-dom";
import styles from './style.module.css';
import {useNavigate} from 'react-router-dom';
import UnstyledButtonsSimple from '../Button';

const Header = () => {

    const navigate = useNavigate();

    const navigateToContacts = () => {
      navigate('/brandlist');
    };

    const navigateToHome = () => {
        navigate('/');
      };

    return(
               <div className={styles.header}>
<div style = {{fontWeight:500,fontSize:18,cursor:"pointer"}} onClick = {navigateToHome}>Brand2Connect</div>
<div className={styles.subTabs}>
    <Link className={styles.tab}>Services</Link>
    <Link className={styles.tab}>About</Link>
    <Link className={styles.tab} to = "/contact">Contact</Link>
    <div className={styles.tab}> <UnstyledButtonsSimple backgroundColor = {"black"} text = {"Let's talk"} onClick = {navigateToContacts}  hover = {true} /></div>
</div>
           </div>
    )
}

export default Header;