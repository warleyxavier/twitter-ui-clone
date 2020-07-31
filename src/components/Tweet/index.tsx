import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Avatar,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Cabeçalho</strong>
            <span>Descrição</span>
            <Dot />
            <time>27 de jul</time>
          </Header>

          <Description>Correndo atrás dos sonhos</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 12
            </Status>
            <Status>
              <RetweetIcon /> 8
            </Status>
            <Status>
              <LikeIcon /> 5
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
