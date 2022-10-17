import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Main from "../Layout/Main";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <NextNProgress color="#C83660" height={2} />
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
