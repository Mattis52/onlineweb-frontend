import React, { Component } from 'react';
import { IGroup } from 'core/models/Group';
import { ISearchFilter } from '../../models/Search';
import Dropdown from './Dropdown';
import DoubleSlider from './DoubleSlider';
import { getGroups } from '../../api/groups';
import style from './search.less';

export interface IProps {
  setParam: (k: string, v: string) => void;
  search: string;
  group: string;
  year: string;
}

export interface IState {
  groups: string[];
}

class Searchbar extends Component<IProps, IState> {
  public state: IState = {
    groups: [],
  };

  public async componentDidMount() {
    const groups = await getGroups();
    this.setState({ groups });
  }

  public render() {
    const { search, group, year, setParam } = this.props;
    const { groups } = this.state;
    return (
      <form className={style.grid}>
        <input
          className={style.searchInput}
          type="text"
          value={name}
          onChange={({ target }) => setParam('search', target.value)}
        />
        <Dropdown selected={group} onClick={(g: string) => setParam('group', g)} groups={groups} />
        <DoubleSlider range={year} onChange={(range: string) => setParam('year', range)} />
      </form>
    );
  }
}

export default Searchbar;
