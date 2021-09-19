import React, { useState } from "react";
import styles from '../../styles/components/infoCard.module.scss'
import Image from 'next/image'
import logo from '../../assets/diverity.png'

export default function InfoCard ({icon={logo},info={label:'Review',number:1,misc:''}}) {
    debugger;
    return (
      <div className={styles.infoCard}>
           <div className={styles.icon}><Image src={icon.logo} alt="Tokhimo" /></div>
          <div className={styles.details}>
            <p className={styles.infoLabel}> {info.label}</p>
            <p className={styles.stats}> {info.number}</p>
            <p className={styles.misc}> {info.misc}</p>
          </div>
      </div>
    );
  };