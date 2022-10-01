import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import {
  HomeFilled,
  SaveFilled,
  SoundFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Main({ children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Learn Manglish</title>
        <meta
          name="description"
          content="By this App മൻglish typing skill will improve"
        />
        <meta name="author" content="Basil Babu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div div className={styles.container}>
        <main className={styles.main}>
          <Image
            src={"/icon-512x512.png"}
            width={100}
            height={100}
            alt="logo"
            placeholder="blur"
            blurDataURL="/icon-512x512_place.jpg"
          />
          <h1 className={styles.title}>
            Welcome to <a> Learn മൻglish </a>
          </h1>
          {children}
        </main>
      </div>
      <nav className={styles.FixedMenu}>
        <Link href={"/"}>
          <a className={router.asPath == "/" ? "nav-item active" : "nav-item"}>
            <HomeFilled /> <span>Home</span>
          </a>
        </Link>
        <Link href={"/saved"}>
          <a
            className={
              router.asPath == "/saved" ? "nav-item active" : "nav-item"
            }
          >
            <SaveFilled /> <span>Saved</span>
          </a>
        </Link>
        <Link href={"/listen"}>
          <a
            className={
              router.asPath == "/listen" ? "nav-item active" : "nav-item"
            }
          >
            <SoundFilled /> <span>Listen</span>
          </a>
        </Link>
        <Link href={"/words"}>
          <a
            className={
              router.asPath == "/words" ? "nav-item active" : "nav-item"
            }
          >
            <MediumCircleFilled /> <span>Words</span>
          </a>
        </Link>
      </nav>
      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
}

export default Main;
