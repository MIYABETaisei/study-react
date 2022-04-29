import Head from "next/head";
import { PostsByUserId } from "src/components/Post/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h1>{user.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{user.email}</li>
        <li>{user.username}</li>
        <li>{user.address.city}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
        <li>{user.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostsByUserId id={user.id} />
    </div>
  );
};
