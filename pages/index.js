import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import keys from "../public/data.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [variantModel, setVariantModel] = useState([]);
  const [typed, setTyped] = useState([]);

  const handleOnClick = (e) => {
    if (e.variant) {
      setVariantModel(e.variant);
    } else {
      setVariantModel([]);
      setTyped((prevState) => [...prevState, e]);
    }
  };
  
  const handleBackSpace = () => {
    typed.pop();
    setTyped((prevState) => [...prevState]);
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
            defaultValue={manlishValue(typed).join("")}
          />
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            defaultValue={englishValue(typed).join("")}
          />
        </div>
        {variantModel.length > 1 && (
          <div className={"floating_select " + styles.grid}>
            {variantModel.map((key, i) => (
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
        )}

        <div className={styles.grid}>
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
            <span className="key_malayalam">⎚</span>clear
          </button>
          <button className="key__button" onClick={() => handleBackSpace()}>
            <span className="key_malayalam"></span>⌫
          </button>
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
