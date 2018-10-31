import React, { Component } from 'react';
import { INewEvent, getEventColor } from '../../models/Event';
import style from './detail.less';
import CardHeader from './Card/CardHeader';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'

export interface IProps {
  event_type: number
}

export interface IState {
  captchaRequested: boolean
}
class Registration extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);

    this.state = {
      captchaRequested: false
    };
  }

  public async componentDidMount() {
  }

  onSignUp = () => {
    this.setState({ captchaRequested: true });
  }
  private onChange(value: string | null) {

    const data ={
      "captcha_value": value,

    }
    if (value != null) {
      const validated = axios.post("http://localhost:8000/api/v1/sign_up/", data).then(o => { console.log(o) });
    }
  }

  public render() {
    const { event_type } = this.props;
    const { captchaRequested } = this.state;

    const color = getEventColor(event_type)
    if (captchaRequested) {
      return (
        <div className={style.registration} >
          <div className={style.cardMargin}>
            <CardHeader color={color}>Påmelding</CardHeader>
            <ReCAPTCHA
              sitekey="6LfV9jkUAAAAANqYIOgveJ0pOowXvNCcsYzRi7Y_"
              onChange={this.onChange} />
          </div>
        </div>
      );
    }

    else {
      return (
        <div className={style.registration} >
          <div className={style.cardMargin}>
            <CardHeader color={color}>Påmelding</CardHeader>
            <button onClick={this.onSignUp}>Meld meg på</button>
          </div>
        </div>
      );
    }
  }
}




export default Registration;
