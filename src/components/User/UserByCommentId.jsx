import Link from "next/link";
import { useUserByCommentId } from "src/hooks/useFetchArray";

export const UserByCommentId = (props) => {
  const { data, error, isLoading, isEmpty } = useUserByCommentId(props.id);

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
            <Link href={`/users/${post.id}`}>
              <a>{post.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
