import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length == 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};
export const useUserByCommentId = (id) => {
  return useFetchArray(id ? `${API_URL}/users?id=${id}` : null);
};
export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};
export const usePostsByCommentId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?id=${id}` : null);
};
