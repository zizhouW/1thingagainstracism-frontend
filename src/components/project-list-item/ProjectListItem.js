import React, { useState, useEffect } from 'react';
import { IMAGE_BASE } from '../../constants';
import { isProjectVoted, setVotedProjects } from '../../util/localStorage';
import { voteProject } from '../../api/projects';
import HeartSvg from './heart.svg';
import HeartFilledSvg from './heart-filled.svg';
import './ProjectListItem.scss';

function ProjectListItem({ id, title, description, image, voteCount }) {
  const [isVoted, setIsVoted] = useState(false);
  const [newVoteCount, setNewVoteCount] = useState(voteCount);
  const voteProjectsCallback = (projectId, newCount, isError) => {
    if (!isError) {
      setVotedProjects(projectId);
      setNewVoteCount(newCount);
      setIsVoted(true);
    }
  };
  const voteForProject = () => {
    if (!isProjectVoted(id)) {
      voteProject(id, voteProjectsCallback);
    }
  };
  useEffect(() => {
    if (isProjectVoted(id)) {
      setIsVoted(true);
    }
  }, [id]);
  return (
    <div className="project-list-item">
      <div className="project-list-item__info">
        {image ? (
          <div className="project-list-item__info__image"><img src={`${IMAGE_BASE}/${image}`} alt="project" /></div>
        ) : (
          <div className="project-list-item__info__placeholder-image" />
        )}
        <div className="project-list-item__info__text">
          <div className="project-list-item__info__text__title">{title}</div>
          <div className="project-list-item__info__text__description">{description}</div>
        </div>
      </div>
      <div className="project-list-item__support" onClick={voteForProject}>
        <img src={isVoted ? HeartFilledSvg : HeartSvg} alt="suport" />{newVoteCount}
      </div>
    </div>
  );
}

export default ProjectListItem;
