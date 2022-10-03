import { Commit } from "../models/commit.model";
import { Repository } from "../models/repository.model";

export const getRepos = async (username): Promise<Repository[]> => {
  const queryParams = new URLSearchParams({ username });
  const response = await fetch("/repos?" + queryParams.toString());
  const results: Repository[] = await response.json();
  return results;
};

export const getCommits = async (repo, username): Promise<Commit[]> => {
  const queryParams = new URLSearchParams({ repo, username });
  const response = await fetch("/commits?" + queryParams.toString());
  const results: Commit[] = await response.json();
  return results;
};
