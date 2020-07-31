import React from 'react';

import {
  Container,
  Topside,
  LogoContainer,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Button,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Warley Xavier</strong>
          <span>@warley_xavier</span>
        </ProfileData>

        <ExitIcon />
      </Botside>

    </Container>
  );
};

export default MenuBar;
