import Head from "next/head";
import { PostsByCommentId } from "src/components/Post/PostByCommentId";
import { UserByCommentId } from "src/components/User/UserByCommentId";
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
        <title>{data.name}</title>
      </Head>
      <div className="text-lg">
        {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2"></div>
      <PostsByCommentId id={data.postId} />
    </div>
  );
};
