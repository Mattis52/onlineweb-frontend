import React from 'react';
import ProfileSmall from './ProfileSmall';
import { ISearchUser } from '../../models/User';
import Searchbar from './Searchbar';
import style from './search.less';
import { IProfileProps } from 'profile';
import qs from 'query-string';

export interface IProps extends IProfileProps {}

export interface IState {
  readonly users: ISearchUser[];
}

export interface IParams {
  search: string;
  group: string;
  year: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      users: [],
    };
  }

  public setParam = (name: string, value: string) => {
    const { history, params } = this.props;
    const newParams = { ...params, ...{[name]: value} };
    const paramString = `?${qs.stringify(newParams)}`;
    history.push(paramString);
  }

  public render() {
    const { users } = this.state;
    const { search, group, year } = this.getParams(this.props.params);
    return (
      <>
        <Searchbar setParam={this.setParam} {...{search, group, year }}
        />
        <div className={style.smallProfileGrid}>
          {users.map((user) => (
            <ProfileSmall user={user} />
          ))}
        </div>
      </>
    );
  }

  private getParams(params: qs.OutputParams): IParams {
    return {
      search: params.search || '',
      group: params.group || '',
      year: params.year || '',
    }
  }
}

export default Search;
