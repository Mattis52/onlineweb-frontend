import React from 'react';
import { INewEvent, getEventColor } from '../../models/Event';
import style from './detail.less';
import CardHeader from './Card/CardHeader';
interface IProps {
  event_type: number,
  on_sign_up: () => void
}
const Registration = (props : IProps) => {
  const color = getEventColor(props.event_type)
  return (
    <div className={style.registration}>
      <div className={style.cardMargin}>
        <CardHeader color={color}>Påmelding</CardHeader>
        <button onClick={props.on_sign_up}>Meld meg på</button>
        <p></p>
      </div>
    </div>
  )
}

export default Registration;
