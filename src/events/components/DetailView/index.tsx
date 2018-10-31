import React, { Component } from 'react';
import { INewEvent, mockEvent } from '../../models/Event';
import { getEvent } from '../../api/events';
import ListEvent from '../ListView/ListEvent';
import PictureCard from './PictureCard';
import style from './detail.less';
import InfoBox from './InfoBox';
import Registration from './Registation';
import Contact from './Contact';
import ReCAPTCHA from 'react-google-recaptcha'
import { throws } from 'assert';
import { post } from '../../../common/utils/api'
import axios from 'axios';

export interface IProps {
  eventId: string;
}

export interface IState {
  eventId: number;
  event: INewEvent | null;
  captchaRequested: boolean;
}

class DetailView extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      eventId: parseInt(props.eventId, 10),
      event: null,
<<<<<<< HEAD
=======
      captchaRequested: false
>>>>>>> eb79f71370bdafd3fdaf3aee456c76a8f6e19ae9
    };
  }

  public async componentDidMount() {
    const { eventId } = this.state;
    const event = await getEvent(eventId);
    this.setState({ event });
  }

  private onSignUp() {
    this.setState({ captchaRequested: true });
  }

  private onChange(value: string | null) {
    if (value != null) {
      const validated = axios.post("http://localhost:8000/api/v1/sign_up/", { "captcha_value": value }).then(o => { console.log(o) });
    }
  }

  public render() {
    const { event, eventId } = this.state;
    const e = event || mockEvent;
    let captcha;
    console.log(this.state.captchaRequested)

    if (this.state.captchaRequested) {
      captcha = <ReCAPTCHA
        sitekey="6LfV9jkUAAAAANqYIOgveJ0pOowXvNCcsYzRi7Y_"
        onChange={this.onChange} />
    }

    return (
      <div className={style.container}>
        {captcha}
        <div className={style.leftContainer}>
          <ListEvent key={eventId} {...e} />
          <PictureCard key={eventId} {...e} />
          <InfoBox {...e} />
        </div>
        <div className={style.rightContainer}>
          <Registration event_type={e.event_type} on_sign_up={this.onSignUp.bind(this)} />
          <Contact {...e} />
        </div>
      </div>
    );
  }
}

export default DetailView;
