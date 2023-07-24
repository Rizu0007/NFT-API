import React, {useState} from "react";
import {RiSendPlaneFill} from 'react-icons/ri'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti"

import Style from './Footer.module.css';
import Link from "next/link";
import {Logo} from '../index'


const Footer = () => {
  const menuList=["Home" , "About" , "Product" , "Contact" , "Ico" , 'Membership'];

  return (
    <div className={Style.footer}>
    <div className={Style.footer_box}>
    <div className={Style.footer_box_social}>
    
    <a href="/">
   <Logo className={Style.footer_box_social_logo} /> 
    
    </a>
    <p className={Style.footer_box_social_info}>
    World largest hgjkl;'
    '
    </p>
    <div className={Style.footer_social}>
    <a href="#">
    <TiSocialFacebook/>

    </a>
    <a href="#">
    <TiSocialLinkedin/>

    </a>
    <a href="#">
    <TiSocialTwitter/>

    </a>
    <a href="#">
    <TiSocialInstagram/>

    </a>
    </div>
    </div>

    <div className={Style.footer_box_help}>
    
    <h2>
    help center
    </h2>
    <div className={Style.name}>
    {menuList.map((el , i)=>(
      <p key={i+1}>{el}</p>

    ))}
    
    </div>
    </div>
    

    <div className={Style.subscribe}>
    <h3>Subscribe</h3>
    <div className={Style.subscribe_box}>
    <input type="email" placeholder="Enter Your Email"/>
    <RiSendPlaneFill className={Style.subscribe_box_send}/>
    
    </div>

    <div className={Style.subscribe_box_info}>
    <p> Your project has `@next/font` installed as a dependency, please use the built-in `next/font` instead. The `@next/font` package will be removed in Next.js 14. You can migrate by running `npx @next/codemod@latest built-in-next-font .</p>
    
    </div>
    </div>
    </div>
    
    </div>

  )
};

export default Footer;
