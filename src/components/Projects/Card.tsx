import React, { useEffect } from 'react';
import { getLinkPreview } from 'link-preview-js';
import github from '../../assets/icons/github.svg';
import openInNew from '../../assets/icons/open-in-new.svg';
import { RepoData } from './Projects';

interface CardProps {
  repo: RepoData;
}

const Card = ({ repo }: CardProps) => {
  const { name, createdTime, url, repoUrl, desc } = repo;

  const [previewImg, setPreviewImg] = React.useState<string>('');
  useEffect(() => {
    const getLinkPreviewFunc = async () => {
      const previewData = await getLinkPreview(url);
      if ('images' in previewData) setPreviewImg(previewData.images[0]);
    };
    getLinkPreviewFunc();
  }, [url]);

  return (
    <div className="card">
      <img src={previewImg} className="preview" alt="Placeholder image" />
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
          <strong>Created:</strong>
          {createdTime.toLocaleDateString()}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
