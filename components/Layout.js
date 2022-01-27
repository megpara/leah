import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Cookies by Leah Lane</title>
        <meta name="description" content="Cookies by Leah Lane" />
        <link rel="icon" type="image/png" href="/leah-favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&family=PT+Mono&family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
    </div>
  );
}
