import React, { useEffect } from 'react';
import { getLinkPreview } from 'link-preview-js';
import github from '../../assets/icons/github.svg';
import openInNew from '../../assets/icons/open-in-new.svg';
import { RepoData } from './Projects';

interface CardProps {
  name: string;
  createdTime: Date;
  url: string;
  repoUrl: string;
  desc: string;
  img: string;
}

const Card = ({ name, createdTime, url, repoUrl, desc, img }: CardProps) => {
  return (
    <div className="card">
      <img src={img} className="preview" alt="Placeholder image" />
      <div className="content">
        <div className="firstRow">
          <h3 className="card-name">{name}</h3>
          <div className="links">
            <a href={repoUrl} target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href={url} target="_blank">
              <img src={openInNew} alt="open in new" />
            </a>
          </div>
        </div>
        <p className="card-date">
          <strong>Created:</strong> {createdTime.toLocaleDateString()}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
