import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

function Main({ children }) {
  return (
    <div div className={styles.container}>
      <Head>
        <title>Learn മൻglish</title>
        <meta
          name="description"
          content="By this App മൻglish typing skill will improve"
        />
        <meta name="author" content="Basil Babu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a> Learn മൻglish </a>
        </h1>
        {children}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/beacel.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/beacel.png" alt="beacel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Main;
