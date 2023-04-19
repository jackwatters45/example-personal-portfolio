import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import toTitleCase from '../../utils/toTitleCase';
import Card from './Card';
import './Projects.scss';

export interface RepoData {
  id: string;
  name: string;
  desc: string;
  lastUpdate: Date;
  repoUrl: string;
  createdTime: Date;
  url: string;
}

const Projects = () => {
  const [reposData, setReposData] = useState<RepoData[]>([]);

  interface Repo {
    name: string;
    description: string;
    pushed_at: string;
    svn_url: string;
    created_at: string;
    topics: string[];
    homepage: string;
  }

  const getRepoData = (repo: Repo): RepoData => {
    const id = repo.name;
    const name = toTitleCase(id);
    const desc = repo.description;
    const lastUpdate = new Date(repo.pushed_at);
    const repoUrl = repo.svn_url;
    const createdTime = new Date(repo.created_at);
    const url = repo.homepage;

    return { id, name, desc, lastUpdate, repoUrl, createdTime, url };
  };

  useEffect(() => {
    const octokit = new Octokit();
    try {
      const getRepos = async () => {
        const reposResponse = await octokit.request('GET /users/{user}/repos', {
          user: 'jackwatters45',
        });

        const reposToDisplay = reposResponse.data.filter(
          (repo: Repo) => !!repo.topics.includes('portfolio'),
        );

        setReposData(reposToDisplay.map((repo: Repo) => getRepoData(repo)));
      };
      if (!reposData.length) getRepos();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <div className="cards">
        {reposData.map((repo: RepoData) => {
          return <Card key={repo.name} repo={repo} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
