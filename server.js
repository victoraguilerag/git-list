import express from "express";
import next from "next";
import { getRepos, getCommits, getBranch } from './lib/integrations/octokit.js';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();

  server.get("/repos", async (req, res) => {
    const repos = await getRepos(req.query.username);
    return res.json(repos);
  });

  server.get("/commits", async ({
    query: {
      repo,
      username
    }
  }, res) => {
    const branch = await getBranch(repo, username);
    const commits = await getCommits(repo, username, branch.commit.sha)
    return res.json(commits);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
