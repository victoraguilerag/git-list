const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GITHUB_APP,
});

const getRepos = async (username) => {
  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: username,
    });

    return response.data;
  } catch (e) {
    throw new Error("Error loading repos");
  }
};

const getBranch = async (repo, username) => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
      owner: username,
      repo: repo,
      branch: 'master'
    })

    return response.data;
  } catch (e) {
    throw new Error("Error loading commits");
  }
};

const getCommits = async (repo, username, sha) => {
  try {
    const query = new URLSearchParams({ sha, })
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits?' + query.toString(), {
      owner: username,
      repo: repo,
    })

    return response.data;
  } catch (e) {
    console.log(e)
    throw new Error("Error loading commits");
  }
};

module.exports = {
  getRepos,
  getCommits,
  getBranch,
}