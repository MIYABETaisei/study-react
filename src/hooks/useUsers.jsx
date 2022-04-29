import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data: users, error: usersError } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  console.log({ users, usersError });

  return {
    users,
    usersError,
    isLoading: !users && !usersError,
    isEmpty: users && users.length == 0,
  };
};
