import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();
  console.log({ data, error });
  if (!data && !error) {
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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
