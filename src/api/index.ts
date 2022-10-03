import { Commit } from "../models/commit.model";
import { Repository } from "../models/repository.model";

export const getRepos = async (username): Promise<Repository[]> => {
  try {
    const queryParams = new URLSearchParams({ username });
    const response = await fetch("/repos?" + queryParams.toString());
    const results: Repository[] = await response.json();
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getCommits = async (repo, username): Promise<Commit[]> => {
  try {
    const queryParams = new URLSearchParams({ repo, username });
    const response = await fetch("/commits?" + queryParams.toString());
    const results: Commit[] = await response.json();
    return results;
  } catch (err) {
    console.log(err);
  }
};
