import React from 'react';
import styles from './style.module.css';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header';
import InputField from '../../components/InputField';
import UnstyledButtonsSimple from '../../components/Button';

const Contact = () => {
    return(
        <div className= {styles.contactPage}>
             <Header />
             <div className={styles.contactBody}>
                  <div></div>
                  <div className={styles.contactSubbody}>
                    <div>
                  <Typography gutterBottom variant="h4" component="div" className={styles.headerText}>
          Feel free to keep in touch
        </Typography>
        <Typography  variant="p" component="div" className={styles.subHeaderText}>
        We are here to help you with any inquiries you may have about our products and services. Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!
        </Typography>
        </div>
        <div style = {{display:"flex",flexDirection:"column",rowGap:"30px"}}>
            <InputField title = {"Name"} label = {true} />
            <InputField title = {"Email"} label = {true} />
            <InputField title = {"Subject"} label = {true} />
            <InputField title = {"Message"} label = {true} />
            <div className={styles.tab}> <UnstyledButtonsSimple text = {"Send Message"} /></div>
        </div>
                  </div>
                  <div></div>
             </div>
        </div>
    )
}

export default Contact