import Head from "next/head";
import { Header } from "src/components/Header";

const About = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">Next.jsのSSR,SG,ISR実装</h1>
      <p className="text-lg mt-4">JSONPlaceholderのAPIを使用</p>
    </div>
  );
};

export default About;
