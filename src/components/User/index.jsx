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
      <h1b className="font-bold text-3xl">{user.name}</h1b>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>メール：{user.email}</li>
        <li>アカウント名：{user.username}</li>
        <li>住所：{user.address.city}</li>
        <li>電話番号：{user.phone}</li>
        <li>Webサイト：{user.website}</li>
        <li>勤務先：{user.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-2"></div>
      <PostsByUserId id={user.id} />
    </div>
  );
};
