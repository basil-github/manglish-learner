import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Main from "../Layout/Main";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
