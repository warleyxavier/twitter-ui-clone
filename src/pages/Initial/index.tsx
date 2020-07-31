import React from 'react';

import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Main from '../../components/Main';

import { Container, Wrapper } from './styles';

const Initial: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Initial;
