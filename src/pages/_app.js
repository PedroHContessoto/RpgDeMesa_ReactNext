import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/dropdown.css";
import "../styles/icones.css";
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from "@/contexts/AuthContext";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  // const getLayout = Component.getLayout || ((Page) => Page);
  return (
    <>
      <Head>
        <title>MM VMP</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script src="/scripts/bootstrap.5.2.2.js" />
      <AuthProvider >
        <Component {...pageProps} />
      </AuthProvider>
      
    </>
  );
}
export default MyApp;
