import React from 'react';
import Head from 'next/head';
import styles from './page.module.css'; // Assuming you have a CSS module for styles

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>HouseIL - Luxury Rentals</title>
                <meta name="description" content="Experience luxury living with HouseIL." />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Welcome to HouseIL</h1>
                    <p className={styles.subtitle}>Discover your luxury escape</p>
                </header>
                <main className={styles.main}>
                    <section className={styles.features}>
                        <h2 className={styles.featuresTitle}>Featured Properties</h2>
                        {/* Add property cards here */}
                    </section>
                </main>
                <footer className={styles.footer}>
                    <p className={styles.footerText}>© 2023 HouseIL. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default HomePage;