import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  console.log({ data, error });

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }
  if (isEmpty) {
    return <div className="">データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
