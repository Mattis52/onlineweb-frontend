import React, { Component } from 'react';
import { UserResourceType } from '../api';
import { injectUserContext, IUserContext, UserContext } from '../providers/UserProvider';

import ResourceManager from 'common/resource/ResourceManager';


export interface IProps {
  auth?: IUserContext;
}

class AuthCallback extends Component<IProps> {
  public async componentDidMount() {
    const { auth } = this.props;
    if (auth) {
      const resource = await ResourceManager.getResource(UserResourceType);
      auth.setUser(resource.value);
    }
  }

  public render() {
    return (
      <div>
        thonkery
      </div>
    );
  }
}

export default (...props) => {
  return (
    <UserContext.Consumer>
      {(context) => <AuthCallback {...props} auth={context} />}
    </UserContext.Consumer>
  );
};
