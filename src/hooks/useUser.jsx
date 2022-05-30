import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWRImmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null
  );
  return {
    user,
    userError,
    isLoading: !user && !userError,
  };
};
