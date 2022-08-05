import { globalStyles } from "styles/globalStyles.js";

function MyApp({ Component, pageProps }) {
  // stitches
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
