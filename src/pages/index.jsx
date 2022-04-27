import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONplaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};

export default About;
