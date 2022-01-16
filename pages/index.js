import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import keys from "../public/data.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [typed, setTyped] = useState([]);
  useEffect(() => {
    //englishValue(typed);
    console.log(englishValue(typed));
  }, [typed]);
  const handleOnClick = (e) => {
    setTyped((prevState) => [...prevState, e]);
    console.log(typed);
    //console.log(englishValue(typed));
  };
  const englishValue = (typed) => {
    let onlyEnglish = typed.map((val, i) => val.english);
    return onlyEnglish;
  };
  const manlishValue = (typed) => {
    let onlyMalayalam = typed.map((val, i) => val.malayalam);
    return onlyMalayalam;
  };

  return (
    <div className={styles.container}>
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

        <div className={styles.description}>
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            value={manlishValue(typed).join("")}
          />
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            value={englishValue(typed).join("")}
          />
        </div>

        <div className={styles.grid}>
          <button
            className="key__button"
            onClick={() =>
              handleOnClick({
                key: "⎵",
                english: " ",
                malayalam: " ",
              })
            }
          >
            <span className="key_malayalam">⎵</span>⎵
          </button>
          <button className="key__button" onClick={() => setTyped([])}>
            <span className="key_malayalam">⎚</span>
            Clear
          </button>
          {keys.map((key, i) => (
            <button
              key={i}
              className="key__button"
              onClick={() => handleOnClick(key)}
            >
              <span className="key_malayalam">{key.malayalam}</span>
              {key.english}
            </button>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/b_a_z_i_l__/"
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
