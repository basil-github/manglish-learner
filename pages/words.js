import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { addWord, db, deleteWord, Words } from "../utils/db";
import keys from "../public/words.json";

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
];
const App = () => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={keys?.length >= 1 ? keys : []}
        style={{
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
      />
    </>
  );
};

export default App;
