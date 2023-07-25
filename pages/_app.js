import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>XYZ Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly active meetups that you can join."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
