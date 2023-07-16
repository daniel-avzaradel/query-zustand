import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { Repo } from "./types";
import api from "../../services/api";

const getRepos = async (context: QueryFunctionContext) => {
  const [, userId] = context.queryKey;
  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);
  return data;
};

const useFetchRepos = (userId: string) => {
  return useQuery(["repos", userId], getRepos);
};

export default useFetchRepos;
