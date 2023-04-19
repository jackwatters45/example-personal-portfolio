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

  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <div className="cards">
        <Card
          name="Todo List/Notion Clone"
          createdTime={new Date('2/14/23')}
          url="https://jackwatters.dev/todo-list-react"
          repoUrl="https://github.com/jackwatters45/todo-list-react"
          desc="A todo list based on how I use Notion.io for day to day use. Created Using React.js and Firebase."
          img="https://res.cloudinary.com/drheg5d7j/image/upload/v1681594555/personal%20portfolio/todo-preview_1_ms2vf7.jpg"
        />
        <Card
          name="Wheres Waldo App"
          createdTime={new Date('2/16/23')}
          url="https://jackwatters.dev/wheres-waldo-app"
          repoUrl="https://github.com/jackwatters45/wheres-waldo-app"
          desc="Users attempt to locate characters in an image as fast as possible.  Uses Firebase Firestore and Authentication."
          img="https://res.cloudinary.com/drheg5d7j/image/upload/v1681594946/personal%20portfolio/wheres-waldo-app_oprcj6.jpg"
        />
      </div>
    </section>
  );
};

export default Projects;
