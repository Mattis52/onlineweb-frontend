import Heading from 'common/components/Heading';
import { IOfflineIssuesState, OfflineContext } from 'frontpage/providers/OfflineIssues';
import React, { Component } from 'react';
import { getOfflines, getServerCacheOfflines } from '../../api/offline';
import { IOfflineIssue } from '../../models/Offline';
import CarouselArrow from './CarouselArrow';
import style from './offline.less';
import OfflineCarousel from './OfflineCarousel';

export interface IProps {}

export interface IState {
  index: number;
  page: number;
  loadAll: boolean;
}

const DISPLAY_NUMBER = 5;

class Offline extends Component<IProps, IState> {
  public static contextType = OfflineContext;
  public state: IState = {
    index: 0,
    page: 1,
    loadAll: true,
  };

  public async componentDidMount() {
    const { init }: IOfflineIssuesState = this.context;
    init();
  }

  public async fetchAll() {
    this.setState({});
  }

  public async clickNext(amount: number) {
    const { index, loadAll } = this.state;
  }

  public render() {
    const { index, page } = this.state;
    const { offlines }: IOfflineIssuesState = this.context;
    const start = index;
    const end = start + DISPLAY_NUMBER;
    return (
      <section className={style.container}>
        <Heading title="Offline" />
        {offlines.length ? (
          <>
            <CarouselArrow direction="left" onClick={() => this.clickNext(-1)} disabled={index === 0} />
            <OfflineCarousel offlines={offlines.slice(index, index + DISPLAY_NUMBER)} />
            <CarouselArrow direction="right" onClick={() => this.clickNext(1)} disabled={end === offlines.length} />
          </>
        ) : null}
      </section>
    );
  }
}

export default Offline;
