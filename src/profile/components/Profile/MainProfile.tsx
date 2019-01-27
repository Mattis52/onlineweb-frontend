import React, { useContext } from 'react';

import { Content, Pane, SplitPane } from 'common/components/Panes';
import { IFullProfileUser } from 'profile/models/User';
import { UserProfileContext } from 'profile/providers/UserProfile';

import Header from './Header';
import KeyValue from './KeyValue';
import Link from './Link';
import MedalsView from './MedalsView';
import style from './profile.less';
import Progress from './Progress';

const committeeMail = (mail: string) => (mail ? `${mail}@online.ntnu.no` : null);

export const MainProfile = () => {
  const { user } = useContext(UserProfileContext) as { user: IFullProfileUser };
  return (
    <>
      <Header name={`${user.first_name} ${user.last_name}`} />
      <SplitPane>
        <Pane>
          <Content title="Kontakt">
            <KeyValue k="Telefon" v={user.phone_number} />
            <KeyValue k="E-post" v={user.email} />
            <KeyValue k="Komité-e-post" v={committeeMail(user.online_mail)} />
          </Content>
        </Pane>
        <Pane>
          <Content title="Studie">
            <div className={style.studyText}>
              <KeyValue k="Klassetrinn" v={`${user.year}. Klasse`} />
              <KeyValue k="Startår" v="2015" />
            </div>
            <Progress ongoingYear={user.year} completedYear={user.year - 1} />
          </Content>
        </Pane>
      </SplitPane>
      <Pane>
        <Content title="Komitéverv">
          <MedalsView medals={user.positions} />
        </Content>
      </Pane>
      <SplitPane>
        <Pane>
          <Content title="Eksterne sider">
            <Link k="Github" v={user.github} />
            <Link k="Linkedin" v={user.linkedin} />
            <Link k="Hjemmeside" v={user.website} />
          </Content>
        </Pane>
      </SplitPane>
    </>
  );
};
