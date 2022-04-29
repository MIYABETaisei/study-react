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
      <h1>{data.name}</h1>
      <ul>
        <li>{data.body}</li>
        <li>{data.email}</li>
      </ul>
      <h2>コメントの作者</h2>
      <UserByCommentId id={data.postId} />
      <h2>元の記事</h2>
      <PostsByCommentId id={data.postId} />
    </div>
  );
};
