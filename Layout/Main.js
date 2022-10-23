import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  HomeFilled,
  SaveFilled,
  SoundFilled,
  MediumCircleFilled,
  InfoOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Badge } from "antd";
import { Words } from "../utils/db";

function Main({ children }) {
  const router = useRouter();
  const words = Words();
  const [info_open, setInfoOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setInfoOpen(false);
    window?.removeEventListener("scroll", onScroll);
    window?.addEventListener("scroll", onScroll, { passive: true });
    return () => window?.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <div
        className="fixed_menu_info"
        style={{
          width: info_open && "200px",
        }}
        onClick={() => {
          setInfoOpen(!info_open);
        }}
      >
        {info_open ? (
          <CloseOutlined
            onClick={() => {
              setInfoOpen(!info_open);
            }}
          />
        ) : (
          <InfoOutlined />
        )}
        {info_open && (
          <>
            <p class="">
              From this web-app every user can learn manglish easily.It includes
              typing,listening , and more.
            </p>
            From{" | "}
            <a href="https://www.beacel.in/" target={"_blank"}>
              <img src="/logo.png" width={80} />
            </a>
          </>
        )}
      </div>
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
            Welcome to{" "}
            <Link href={"/"}>
              <a> Learn മൻglish </a>
            </Link>
          </h1>
          {children}
        </main>
      </div>
      <nav className={styles.FixedMenu}>
        <Link href={"/"}>
          <a className={router.asPath == "/" ? "nav-item active" : "nav-item"}>
            <HomeFilled /> <span>Home</span>
          </a>
        </Link>{" "}
        <Badge count={words?.length || 0} color="#39235a">
          <Link href={"/saved"}>
            <a
              className={
                router.asPath == "/saved" ? "nav-item active" : "nav-item"
              }
            >
              <SaveFilled /> <span>Saved</span>
            </a>
          </Link>{" "}
        </Badge>
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
