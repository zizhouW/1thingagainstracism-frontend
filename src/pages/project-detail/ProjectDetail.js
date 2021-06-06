import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProject } from '../../api/projects';
import SocialMediaShare from '../../components/social-media-share/SocialMediaShare';
import Loading from '../../components/loading/Loading';
import MButton from '../../components/m-button/MButton';
import { DOMAIN, IMAGE_BASE } from '../../constants';
import { getDateFromEpoch, formatDateString } from '../../util/date';
import BackSvg from './back.svg';
import './ProjectDetail.scss';


const TYPES = ['-', 'Donation','Sign Petition', 'Emails & Calls', 'Team Projects'];
const getType = (type) => {
  const id = parseInt(type.type_id, 10);
  if (id === 5) return type.customType;
  return TYPES[id];
};
const getDuration = (startTime, endTime) => {
  const startTimeStr = formatDateString(startTime);
  const endTimeStr = formatDateString(endTime);
  if (startTime && endTime) {
    return `From ${startTimeStr} to ${endTimeStr}`;
  } else if (!startTime && !endTime) {
    return 'Continuous';
  } else if (startTime) {
    return `From ${startTimeStr}`;
  }
  
  return `Until ${endTimeStr}`;
};

function ProjectDetail() {
  const { projectId } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [project, setProject] = useState(null);

  const getProjectCallback = (project, isError) => {
    if (isError) {
      setIsError(true);
    } else {
      setProject(project);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getProject(projectId, getProjectCallback);
  }, [projectId]);

  return (
    <div className="project-detail">
      <img
        className="project-detail__back"
        src={BackSvg}
        alt="back"
        onClick={() => history.push('/inspirations?tab=projects')}
      />
      {isLoading ? <Loading /> : (
        (isError || !project) ? 'Oops... there is an error. Please try again.' : (
        <div className="project-detail__item">
          <div className="project-detail__item__created">{getDateFromEpoch(project?.created_at)}</div>
          <div className="project-detail__item__types">
            <div className="project-detail__item__types__type">Online</div>
            <div className="project-detail__item__types__type">{getType(project?.type)}</div>
          </div>
          <div className="project-detail__item__title">{project?.name}</div>
          {project?.images?.[0] && (
            <div className="project-detail__item__image"><img src={`${IMAGE_BASE}/${project?.images?.[0]}`} alt="project" /></div>
          )}
          <div className="project-detail__item__category">
            <div className="project-detail__item__category__name">Date</div>
            <div className="project-detail__item__category__content">{getDuration(project?.start_time, project?.end_time)}</div>
          </div>
          <div className="project-detail__item__category">
            <div className="project-detail__item__category__name">About</div>
            <div className="project-detail__item__category__content">{project?.description}</div>
          </div>
          <div className="project-detail__item__detail">
            <div className="project-detail__item__category">
              <div className="project-detail__item__category__name">Who can help</div>
              <div className="project-detail__item__category__content">{project?.who_can_help || 'Not specified'}</div>
            </div>
            <div className="project-detail__item__category">
              <div className="project-detail__item__category__name">What we need</div>
              <div className="project-detail__item__category__content">{project?.what_can_help_with || 'Not specified'}</div>
            </div>
            {/* <div className="project-detail__item__category">
              <div className="project-detail__item__category__name">Link</div>
              <div className="project-detail__item__category__content">
                <a ></a>
              </div>
            </div> */}
            <MButton variant="contained" color="primary" onClick={() => alert('Coming soon...')}>I want to help</MButton>
          </div>
        </div>
      ))}
      <SocialMediaShare link={project?.id ? `${DOMAIN}/projects/${project?.id}` : DOMAIN} />
    </div>
  );
}

export default ProjectDetail;
