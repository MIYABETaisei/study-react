import Link from "next/link";
import { usePostsByCommentId } from "src/hooks/useFetchArray";

export const PostsByCommentId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByCommentId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }
  return (
    <ul>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
