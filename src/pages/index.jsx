import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import Main from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";
import Link from "next/link";

// const handleClip = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;
  const handleClip = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about">
        <a onClick={handleClip}>ボタン</a>
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  );
}
