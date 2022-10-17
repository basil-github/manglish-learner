import { Button, Card, Collapse, Divider, List, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import keys from "../public/data.json";
import { RedoOutlined, PlayCircleFilled } from "@ant-design/icons";
const { Panel } = Collapse;

const columns = [
  {
    title: "മൻglish",
    dataIndex: "manglish",
    key: "manglish",
  },
  {
    title: "മലയാളം",
    dataIndex: "malayalam",
    key: "malayalam",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <PlayCircleFilled
          style={{
            color: "#C83660",
            fontSize: "35px",
            marginTop: "2rem",
          }}
          onClick={() => {
            speak(englishValue(typed).join(""));
          }}
        />
      </Space>
    ),
  },
];
const App = () => {
  const [is_paly, setIsPlay] = useState(false);
  const data = [];
  keys?.map(
    (key) =>
      !key.variant &&
      data.push({
        malayalam: key.malayalam,
        manglish: key.english,
        variant: key.variant,
      })
  );
  const withVariantData = [];
  keys?.map(
    (key) =>
      key.variant &&
      withVariantData.push({
        malayalam: key.malayalam,
        manglish: key.english,
        variant: key.variant,
      })
  );
  async function speak(text) {
    let speakData = new SpeechSynthesisUtterance();
    speakData.text = text;
    speakData.lang = "in";
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    await speechSynthesis.speak(speakData);
    return true;
  }
  useEffect(() => {
    const synth = window.speechSynthesis;
    let voices;
    function loadVoices() {
      voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.value = i;
        // voiceSelect.appendChild(option);
      }
    }

    // in Google Chrome the voices are not ready on page load
    if ("onvoiceschanged" in synth) {
      synth.onvoiceschanged = loadVoices;
    } else {
      loadVoices();
    }
  }, []);
  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        style={{
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
        dataSource={new Set(data)}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                is_paly ? (
                  <RedoOutlined
                    spin
                    style={{
                      color: "#C83660",
                      fontSize: "35px",
                    }}
                  />
                ) : (
                  <PlayCircleFilled
                    style={{
                      color: "#C83660",
                      fontSize: "35px",
                    }}
                    onClick={async () => {
                      const res = await speak(item?.malayalam);
                    }}
                  />
                )
              }
            >
              <Tag color="success"> {item?.malayalam}</Tag>
              <Tag color="processing"> {item?.manglish}</Tag>
            </Card>
          </List.Item>
        )}
      />
      <Divider />
      <Collapse defaultActiveKey={["0"]}>
        {withVariantData.map((key, i) => (
          <Panel
            header={
              <>
                <Tag color="success"> {key?.malayalam}</Tag>
                <Tag color="processing"> {key?.manglish}</Tag>
              </>
            }
            key={i}
          >
            <List
              key={i}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              style={{
                marginBottom: "4rem",
                marginTop: "4rem",
              }}
              dataSource={new Set(key.variant)}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={
                      <PlayCircleFilled
                        style={{
                          color: "#C83660",
                          fontSize: "35px",
                        }}
                        onClick={() => {
                          speak(item?.english);
                        }}
                      />
                    }
                  >
                    <Tag color="success"> {item?.malayalam}</Tag>
                    <Tag color="processing"> {item?.english}</Tag>
                  </Card>
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>{" "}
      <Divider />
    </>
  );
};

export default App;
