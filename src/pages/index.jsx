import Head from "next/head";
import { Header } from "src/components/Header";

const About = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">Next.jsで学ぶReact講座</h1>
      <p className="text-lg mt-4">JSONplaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};

export default About;
