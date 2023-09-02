import React from 'react';
import styles from './style.module.css';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header';
import ControlledAccordions from '../../components/Accordian';
import UnstyledButtonsSimple from '../../components/Button';

const WaitList = () => {

const getBody = () => {
    return(
        <div style={{display:"flex",flexDirection:"column",rowGap:4,fontFamily:"sans-serif"}}>
           <div className={styles.weightListRow}> <div style = {{fontWeight:"bold",minWidth:"120px"}}>Priority Access: </div><div>Be among the first to experience the power of data-driven insights and brand collabration tailered to your unique style.</div></div>
           <div className={styles.weightListRow}>  <div style = {{fontWeight:"bold",minWidth:"120px"}}>Stay in the Know: </div><div>Get insider updates on our platform's development, new features, and success stories from fellow creators.</div></div>
           <div className={styles.weightListRow}>   <div style = {{fontWeight:"bold",minWidth:"120px"}}>Secure your Spot: </div><div>Limited Spots avilable. Secure your place now to ensure you don't miss on this game-changing opportunity.</div></div>
        </div>
    )
}

const getBody2 = () => {
    return(
        <div style={{display:"flex",flexDirection:"column",rowGap:4,fontFamily:"sans-serif"}}>
           <div className={styles.weightListRow}> <div style = {{fontWeight:"bold",minWidth:"120px"}}>Sign Up: </div><div>Fill in your details and secure your spot on the waitlist. Don't worry, it's quick and hassle-free.</div></div>
           <div className={styles.weightListRow}>  <div style = {{fontWeight:"bold",minWidth:"120px"}}>Anticipate: </div><div>As we prepare to launch, you'll receive exclusive content and insights to keep you inspired and informed.</div></div>
           <div className={styles.weightListRow}>   <div style = {{fontWeight:"bold",minWidth:"120px"}}>Be the First: </div><div>When the platform goes live, ypu'll receive early access to start tailoring your analytics, customizing your metrics, and connecting with brands that align with your values.</div></div>
        </div>
    )
}

    return(
        <div className={styles.home}>
  <Header />
<div className= {styles.waitListBody}>
 <div></div>
 <div  className={styles.waitListSubBody}>
 <Typography gutterBottom variant="h4" component="div" className={styles.headerText}>
 Join the Waitlist for Exclusive Access 🚀 🎉</Typography>
    <Typography  variant="p" component="div" className={styles.subHeaderText}>
 🎉 Exciting News! 🎉
        </Typography>
        <Typography  variant="p" component="div" className={styles.subHeaderText} style = {{marginTop:"3vh"}}>
        We’re thrilled to see your interest in joining the exclusive waitlist for our revolutionary platform tailored for creators and influencers like you. By joining the waitlist, you’re taking the first step towards unlocking a world of possibilities to amplify your online presence, analyze your impact, and seamlessly connect with brands that resonate with your vision.
        </Typography>
        <div className= {styles.accordianData}>
            <ControlledAccordions data = {[{"title":"Why Join the Waitlist?",body:getBody()},{"title":"How it Works?",body:getBody2()}]} />
        </div>
        <strong className={styles.subHeaderText} style = {{color:'grey',position:"relative",top:"14%",fontWeight:300}}>
        Be Part of the Revolution 💪💫
        </strong>
        <Typography  variant="p" component="div" className={styles.subHeaderText} style = {{marginTop:"1vh",position:"relative",top:"10"}}>
        In the digital age, influence is power. Don’t miss your chance to be part of a community that’s shaping the future of online creativity and brand engagement. We’re excited to have you on board as we embark on this journey together.
        </Typography>
        <Typography  variant="p" component="div" className={styles.subHeaderText} style = {{marginTop:"1vh",position:"relative",top:"10%"}}>
        Join our waitlist now and be at the forefront of creator empowerment! 💥
        </Typography>
        <div className={styles.tab} style = {{position:"relative",top:"12%"}}> <UnstyledButtonsSimple text = {"Join the Waitlist"} /></div>
 </div>
 <div></div>
</div>
        </div>
    )

}
export default WaitList