import React, { Component } from 'react';
import { INewEvent, getEventColor } from '../../models/Event';
import style from './detail.less';
import CardHeader from './Card/CardHeader';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'
import { AuthUser } from 'authentication/models/User';

export interface IProps {
  event_type: number;
}

export interface IState {
  captchaRequested: boolean;
}
class Registration extends Component<IProps, IState>{
  public state: IState = {
    captchaRequested: false,
  };

  public onSignUp = () => {
    this.setState({ captchaRequested: true });
  }

  public render() {
    const { event_type } = this.props;
    const { captchaRequested } = this.state;

    const color = getEventColor(event_type)
    return (
      <div className={style.registration} >
        <div className={style.cardMargin}>
          <CardHeader color={color}>Påmelding</CardHeader>
          { captchaRequested
            ? <ReCAPTCHA
                sitekey="6LfV9jkUAAAAANqYIOgveJ0pOowXvNCcsYzRi7Y_"
                onChange={this.onChange}
              />
          : <button onClick={this.onSignUp}>Meld meg på</button> }
        </div>
      </div>
    );
  }

  private async onChange(value: string | null) {
    const data = {
      captcha_value: value,
    };
    if (value != null) {
      const obj = await axios.post('http://localhost:8000/api/v1/sign_up/', data);
      console.log(obj);
    }
  }
}

export default Registration;
