import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import keys from "../public/data.json";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutlined, PlayCircleFilled } from "@ant-design/icons";
export default function Home() {
  const [variantModel, setVariantModel] = useState([]);
  const [typed, setTyped] = useState([]);
  const [copiedMalayalam, setCopiedMalayalam] = useState({
    value: "",
    copied: false,
  });

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

  function speak(text) {
    let speakData = new SpeechSynthesisUtterance();
    speakData.text = text;
    speakData.lang = "in";
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speechSynthesis.speak(speakData);
  }
  return (
    <>
      <div className={styles.description}>
        <div className="input_malayalam">
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            defaultValue={manlishValue(typed).join("")}
            disabled
          />
          <CopyToClipboard
            text={manlishValue(typed).join("")}
            onCopy={() => setCopiedMalayalam({ copied: true })}
          >
            <button className="key__button copy">
              <CopyOutlined />
            </button>
          </CopyToClipboard>{" "}
        </div>
        <div className="input_malayalam">
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            defaultValue={englishValue(typed).join("")}
            disabled
          />
          <CopyToClipboard
            text={englishValue(typed).join("")}
            onCopy={() => setCopiedMalayalam({ copied: true })}
          >
            <button className="key__button copy">
              <CopyOutlined />
            </button>
          </CopyToClipboard>
        </div>
        <PlayCircleFilled
          style={{
            color: "#a022f0",
            fontSize: "35px",
            marginTop: "2rem",
          }}
          onClick={() => {
            speak(englishValue(typed).join(""));
          }}
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
            className={"key__button " + (i < 13 ? " variant_null" : "")}
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
    </>
  );
}
