import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const Users = () => {
  const { users, usersError, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (usersError) {
    return <div className="">{usersError.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                {user.name} | {user.email}
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
