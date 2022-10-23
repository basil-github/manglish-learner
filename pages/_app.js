import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Main from "../Layout/Main";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-QXDQ55JMFC"
      />{" "}
      <Script strategy="lazyOnload">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QXDQ55JMFC');`}
      </Script>
      <NextNProgress color="#C83660" height={2} />
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
