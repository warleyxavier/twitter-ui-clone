import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="josao" nickname="@josao" />,
              <FollowSuggestion name="carlos" nickname="@carlos-quiroz" />,
              <FollowSuggestion name="ana" nickname="@ana_braga" />,
              <FollowSuggestion name="barack" nickname="@barack_obama" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Notícia 1" description="Novo curso" />,
              <News
                title="Notícia 2"
                description="Tire sua certificação agora"
              />,
              <News title="Notícia 3" description="É agora ou nunca" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="josao" nickname="@josao" />,
              <FollowSuggestion name="carlos" nickname="@carlos-quiroz" />,
              <FollowSuggestion name="ana" nickname="@ana_braga" />,
              <FollowSuggestion name="barack" nickname="@barack_obama" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Notícia 1" description="Novo curso" />,
              <News
                title="Notícia 2"
                description="Tire sua certificação agora"
              />,
              <News title="Notícia 3" description="É agora ou nunca" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
