import { Space, Table, Tag } from "antd";
import React from "react";
const columns = [
  {
    title: "മലയാളം",
    dataIndex: "malayalam",
    key: "malayalam",
  },
  {
    title: "മൻglish",
    dataIndex: "manglish",
    key: "manglish",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
        <a>Copy</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    malayalam: "Jo",
    manglish: "gfhgfhghg",
  },
];

const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    style={{
      marginBottom: "4rem",
      marginTop: "4rem",
    }}
  />
);

export default App;
