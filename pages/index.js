import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import keys from "../public/data.json";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutlined, SaveFilled } from "@ant-design/icons";
import { message, Modal } from "antd";
import { addWord } from "../utils/db";
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
      showModal();
    } else {
      setVariantModel([]);
      handleCancel();
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const save = async () => {
    await addWord({
      malayalam: manlishValue(typed).join(""),
      manglish: englishValue(typed).join(""),
      read_status: false,
    });
    message.info("saved");
  };
  return (
    <>
      {" "}
      <Modal
        title={null}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        centered
      >
        {variantModel.length > 1 && (
          <div className={styles.grid}>
            {variantModel.map((key, i) => (
              <button
                key={i}
                className="key__button"
                onClick={() => handleOnClick(key)}
              >
                <span className="key_malayalam">{key.english}</span>
                {key.malayalam}
              </button>
            ))}
          </div>
        )}
      </Modal>
      <div className={styles.description}>
        <div className="input_malayalam">
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            defaultValue={manlishValue(typed).join("")}
            disabled
          />{" "}
          {manlishValue(typed).join("") && (
            <>
              <button className="key__button save_" onClick={() => save()}>
                സേവ്
              </button>
              <CopyToClipboard
                text={manlishValue(typed).join("")}
                onCopy={() => {
                  setCopiedMalayalam({ copied: true });
                  message.success("കോപിഡ്");
                }}
              >
                <button className="key__button ">കോപ്പി</button>
              </CopyToClipboard>
            </>
          )}
        </div>
        <div className="input_malayalam">
          <input
            type="text"
            className="key_input"
            placeholder="type.."
            defaultValue={englishValue(typed).join("")}
            disabled
          />
          {englishValue(typed).join("").length > 0 && (
            <>
              {" "}
              <button className="key__button save_" onClick={() => save()}>
                save
              </button>
              <CopyToClipboard
                text={englishValue(typed).join("")}
                onCopy={() => {
                  setCopiedMalayalam({ copied: true });
                  message.success("Copied");
                }}
              >
                <button className="key__button copy">Copy</button>
              </CopyToClipboard>
            </>
          )}
        </div>
      </div>
      <div className={styles.grid + " fix_height"}>
        {keys.map((key, i) => (
          <button
            key={i}
            className={"key__button " + (i < 13 ? " variant_null" : "")}
            onClick={() => handleOnClick(key)}
          >
            <span className="key_malayalam">{key.english}</span>
            {key.malayalam}
          </button>
        ))}
      </div>
      <div className="">
        {" "}
        <div className={styles.grid}>
          <button className="key__button" onClick={() => setTyped([])}>
            <span className="key_malayalam">⎚</span>clear
          </button>
          <button
            className="key__button space_btn"
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
          <button className="key__button" onClick={() => handleBackSpace()}>
            <span className="key_malayalam"></span>⌫
          </button>
        </div>
      </div>
    </>
  );
}
