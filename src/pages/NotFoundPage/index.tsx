import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFoundPage.module.scss';
import teamRocket from './assets/teamRocket.png';
import Button, { BtnColors } from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={teamRocket} alt="teamRocket" />
          <div className={s.subtitle}>
            <span>The rocket team</span> has won this time
          </div>
          <Button color={BtnColors.yellow} onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
