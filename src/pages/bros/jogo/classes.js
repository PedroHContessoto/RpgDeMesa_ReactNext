import React, { useState, useEffect, useContext } from 'react';
import styles from '../../../styles/Classes.module.css';
import BrosSideBar from '@/components/sidebar';
import Head from 'next/head';
import classes from '@/components/info/classes'


function Classes() {
    return (
        <div className={styles.container}>
        <Head>
        <title>Classes</title>
        <link rel="icon
    do projeto" href="/favicon.ico" />
      </Head>
        <BrosSideBar/>
            {classes.map((cls) => (
                <div key={cls.name} className={styles.pergaminho}>
                    <h2 className={styles.h2}>{cls.name}</h2>
                    <p className={styles.p}>{cls.description}</p>
                    <p className={styles.p}><strong className={styles.strong}>Forças:</strong> {cls.strengths}</p>
                    <p className={styles.p}><strong className={styles.strong}>Fraquezas:</strong> {cls.weaknesses}</p>
                    <p className={styles.p}><strong className={styles.strong}>História:</strong> {cls.story}</p>
                </div>
            ))}
        </div>
    );
}

export default Classes;