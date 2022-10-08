import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { addWord, db, deleteWord, Words } from "../utils/db";
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
        <a onClick={() => deleteWord(record?.id)}>Delete</a>
      </Space>
    ),
  },
];
const App = () => {
  const words = Words();
  return (
    <>
      <Table
        columns={columns}
        dataSource={words?.length >= 1 ? words : []}
        style={{
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
      />
    </>
  );
};

export default App;
