import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

function Main({ children }) {
  return (
    <div>
      <Head>
        <title>Learn മൻglish</title>
        <meta
          name="description"
          content="By this App മൻglish typing skill will improve"
        />
        <meta name="author" content="Basil Babu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a> Learn മൻglish </a>
          </h1>
          {children}
        </main>
      </div>
      <nav className={styles.FixedMenu}>
        <a className="nav-item" href="#">
          <i data-feather="home"></i>
          <span>Home</span>
        </a>
        <a className="nav-item" href="#">
          <i data-feather="activity"></i>
          <span>Activity</span>
        </a>

        <a className="nav-item" href="#">
          <i data-feather="message-square"></i>
          <span>Messages</span>
        </a>

        <a className="nav-item" href="#">
          <i data-feather="settings"></i>
          <span>Settings</span>
        </a>
      </nav>
      <footer className={styles.footer}>
        <a
          href="https://www.beacel.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Powered by </span>
          <span className={styles.logo}>
            <Image src="/logo.png" alt="beacel Logo" width={72} height={25} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Main;
