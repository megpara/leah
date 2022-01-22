import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Cookies by Leah Lane</title>
        <meta name="description" content="Cookies by Leah Lane" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </div>
  );
}
