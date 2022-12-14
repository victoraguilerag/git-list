import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import SearchBar from '../src/components/searchBar'
import { getCommits, getRepos } from '../src/api'
import { Repository } from '../src/models/repository.model'
import { Commit } from '../src/models/commit.model'
import List from '../src/components/list'



export default function Home() {
  const [user, setUser] = useState<string>();
  const [repos, setRepos] = useState<Repository[]>();
  const [repo, setRepo] = useState<Repository>();
  const [commits, setCommits] = useState<Commit[]>();

  const handleSearch = async (username) => {
    setUser("")
    setRepo(undefined)
    setRepos([])
    setCommits([])
    const repositoriesResults = await getRepos(username);
    setRepos(repositoriesResults);
    setUser(username)
  }

  const handleSearchCommits = useCallback(async () => {
    const repositoriesResults = await getCommits(repo.name, user);
    setCommits(repositoriesResults);
  }, [repo, user, setCommits])

  useEffect(() => {
    if (!!repo) handleSearchCommits()
  }, [repo, handleSearchCommits])
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Git list</title>
        <meta name="description" content="App to display user github repositories and commits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Git List</h1>
        { !repos && <p>Search your github username to display a list of your public repositories</p>}
        { repos && !repo && <p>Pick the repo you would like to display commits from</p>}
        <SearchBar onSearch={handleSearch} />
        <div className={styles.tags}>
          {repo && <div className={styles.tag}>{repo.name}</div>}
          {repo && <div className={styles.tag}>Main</div>}
        </div>
        {repos && !repo && <List items={repos} onClick={setRepo} />}
        {!!commits && <List linked items={commits} />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
