import React from 'react';
import GitHub from '../../../assets/images/gitHub.svg';
import Linkedin from '../../../assets/images/linkedIn.svg';
import {
  Content,
  Title,
  Function,
  Cards,
  Card,
  Photo,
  Name,
  Participation,
  Description,
  SocialContext,
  Social,
  Icon,
} from '../../../shared-ui/Typography';

const Session = ({data, title, subtitle}) => {

  return (
    <Content>
      <Title>{title}</Title>
      <Function>{subtitle}</Function>
      <Cards>
        {data &&
          data.map(user => (
            <Card key={Math.random()}>
              <Photo src={user.photo} alt={user.name} />
              <Name>{user.name}</Name>
              <Participation>Director</Participation>
              <Description>{user.description}</Description>
              <SocialContext>
                <Social href={user.gitHub} target="_blank">
                  <Icon src={GitHub} alt="Icon GitHub" />
                </Social>
                <Social href={user.linkedIn} target="_blank">
                  <Icon src={Linkedin} alt="Icon LinkedIn" />
                </Social>
              </SocialContext>
            </Card>
          ))}
      </Cards>
    </Content>
  );
};

export default Session;
