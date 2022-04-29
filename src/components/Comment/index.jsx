import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.name}</h1>
      {data ? <p>{`email: ${data?.email}`}</p> : null}
      {data ? <p>{`comment: ${data?.body}`}</p> : null}
    </div>
  );
};
