import Markdown from 'common/components/Markdown';
import React from 'react';
import { INewEvent } from '../../models/Event';
import style from './detail.less';

const InfoBox = ({ description, ingress }: INewEvent) => (
  <div className={style.infoBox}>
    <Markdown className={style.infoBoxHeader} source={ingress} />
    <Markdown className={style.infoBoxContent} source={description} />
  </div>
);

export default InfoBox;
